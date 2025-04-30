import axios from 'axios';
import * as fs from 'fs'; // Используем обычный fs для синхронных операций
import { tmpdir } from 'os';
import * as path from 'path';
import * as sharp from 'sharp';

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function deleteFile(filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        reject(new Error(`Error deleting file: ${err.message}`));
      } else {
        resolve();
      }
    });
  });
}

const MAX_FILE_SIZE_MB = 3;
const MAX_WIDTH = 2000;
const MAX_HEIGHT = 2000;

export async function downloadImageToTempFile(
  urlOrPath: string,
  targetWidth: number,
  targetHeight: number,
): Promise<string> {
  console.log('[downloadImageToTempFile] Start:', urlOrPath);

  if (!urlOrPath || typeof urlOrPath !== 'string' || urlOrPath.trim() === '') {
    throw new Error('Invalid image input');
  }

  const isUrl = /^https?:\/\//i.test(urlOrPath);
  const cleanInput = urlOrPath.split('?')[0];
  const extMatch = cleanInput.match(/\.\w+$/);
  const ext = extMatch ? extMatch[0].toLowerCase() : '.jpg';

  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    throw new Error('Unsupported image format. Only PNG and JPEG are allowed.');
  }

  const fileName = `image-${Date.now()}${ext}`;
  const filePath = path.join(tmpdir(), fileName);

  try {
    // Загрузка или копирование файла
    if (isUrl) {
      const response = await axios.get(urlOrPath, {
        responseType: 'arraybuffer',
      });
      await fs.promises.writeFile(filePath, response.data);
    } else {
      await fs.promises.copyFile(urlOrPath, filePath);
    }

    console.log(
      `[downloadImageToTempFile] Saved original image to: ${filePath}`,
    );

    const image = sharp(filePath);
    const metadata = await image.metadata();

    let finalPath = filePath;

    // Ресайз, если размер превышает лимит
    const stats = await fs.promises.stat(filePath);
    if (stats.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      const resizedPath = path.join(tmpdir(), `resized-${Date.now()}${ext}`);
      await image
        .resize({
          width: Math.min(metadata.width || MAX_WIDTH, MAX_WIDTH),
          height: Math.min(metadata.height || MAX_HEIGHT, MAX_HEIGHT),
          fit: 'inside',
        })
        .toFile(resizedPath);
      await deleteFileSafe(filePath);
      finalPath = resizedPath;
      console.log(
        `[downloadImageToTempFile] Resized image due to size > ${MAX_FILE_SIZE_MB}MB: ${resizedPath}`,
      );
    }

    // Кроп до квадрата
    const finalImage = sharp(finalPath);
    const finalMetadata = await finalImage.metadata();
    if (finalMetadata.width !== finalMetadata.height) {
      const minDim = Math.min(finalMetadata.width!, finalMetadata.height!);
      const croppedPath = path.join(tmpdir(), `cropped-${Date.now()}${ext}`);
      await finalImage
        .extract({
          left: Math.floor((finalMetadata.width! - minDim) / 2),
          top: Math.floor((finalMetadata.height! - minDim) / 2),
          width: minDim,
          height: minDim,
        })
        .toFile(croppedPath);
      await deleteFileSafe(finalPath);
      finalPath = croppedPath;
      console.log(`[downloadImageToTempFile] Cropped to 1:1: ${croppedPath}`);
    }

    // Финальный ресайз
    const outputFilePath = path.join(tmpdir(), `final-${Date.now()}${ext}`);
    await sharp(finalPath)
      .resize(targetWidth, targetHeight, {
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy,
      })
      .toFile(outputFilePath);

    await deleteFileSafe(finalPath);

    console.log(
      `[downloadImageToTempFile] Final image saved to: ${outputFilePath}`,
    );
    return outputFilePath;
  } catch (err: any) {
    console.error(
      `[downloadImageToTempFile] Error with file ${filePath}:`,
      err.message || err,
    );
    throw err;
  }
}

async function deleteFileSafe(filePath: string) {
  try {
    await fs.promises.unlink(filePath);
  } catch (e) {
    console.warn(
      `[deleteFileSafe] Failed to delete ${filePath}:`,
      (e as any).message,
    );
  }
}

export function cleanTempFiles(olderThanMinutes: number = 60): void {
  const dir = tmpdir();
  const threshold = Date.now() - olderThanMinutes * 60 * 1000;

  fs.readdir(dir, (err, files) => {
    if (err) return console.error('[TempCleaner] Failed to read tmp dir:', err);

    files.forEach((file) => {
      if (!/^(image|resized|cropped|final)-/.test(file)) return;
      const fullPath = path.join(dir, file);

      fs.stat(fullPath, (err, stats) => {
        if (err || stats.mtimeMs > threshold) return;
        fs.unlink(fullPath, (err) => {
          if (err)
            console.error(
              `[TempCleaner] Failed to delete ${file}:`,
              err.message,
            );
        });
      });
    });
  });
}

// Автозапуск по расписанию (например, каждый час)
setInterval(() => cleanTempFiles(30), 60 * 60 * 1000);
