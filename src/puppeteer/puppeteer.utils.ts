import axios from 'axios';
import * as fs from 'fs/promises';
import { tmpdir } from 'os';
import * as path from 'path';
import * as sharp from 'sharp';

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function downloadImageToTempFile(
  url: string,
  targetWidth: number,
  targetHeight: number,
): Promise<string> {
  console.log('[downloadImageToTempFile] Start downloading image:', url);

  if (!url || typeof url !== 'string') {
    console.error('[downloadImageToTempFile] Invalid image URL:', url);
    throw new Error('Invalid image URL');
  }

  try {
    const cleanUrl = url.split('?')[0];
    const extMatch = cleanUrl.match(/\.\w+$/);
    const ext = extMatch ? extMatch[0].toLowerCase() : '.jpg'; // по умолчанию .jpg

    // Проверка на разрешенные типы файлов
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
      console.error('[downloadImageToTempFile] Unsupported image format:', ext);
      throw new Error('Unsupported image format. Only PNG and JPEG are allowed.');
    }

    const fileName = `image-${Date.now()}${ext}`;
    const filePath = path.join(tmpdir(), fileName);

    console.log(`[downloadImageToTempFile] Downloading to: ${filePath}`);

    const response = await axios.get(url, { responseType: 'arraybuffer' });

    // Сохраняем изображение временно
    await fs.writeFile(filePath, response.data);
    console.log(`[downloadImageToTempFile] Image saved to: ${filePath}`);

    // Получение размеров изображения перед изменением
    const image = await sharp(filePath);
    const metadata = await image.metadata();

    // Проверка, что metadata существует и содержит размер
    if (metadata.size && metadata.size > 3 * 1024 * 1024) {
      console.error('[downloadImageToTempFile] Image size exceeds 3MB, resizing...');
      await image.resize(targetWidth, targetHeight).toFile(filePath); // Масштабируем, если нужно
    }

    // Проверка на соотношение сторон 1:1
    if (typeof metadata.width === 'number' && typeof metadata.height === 'number') {
      if (metadata.width !== metadata.height) {
        console.log('[downloadImageToTempFile] Cropping image to 1:1 aspect ratio');
        await image
          .resize(Math.min(metadata.width, metadata.height), Math.min(metadata.width, metadata.height))
          .extract({
            left: Math.abs(metadata.width - metadata.height) / 2,
            top: Math.abs(metadata.width - metadata.height) / 2,
            width: Math.min(metadata.width, metadata.height),
            height: Math.min(metadata.width, metadata.height),
          })
          .toFile(filePath);
      }
    } else {
      console.error('[downloadImageToTempFile] Image dimensions are not available.');
      throw new Error('Image dimensions are not available.');
    }

    // Масштабируем изображение до целевого размера
    const outputFilePath = path.join(tmpdir(), `resized-${Date.now()}${ext}`);
    console.log(`[downloadImageToTempFile] Resizing image to ${targetWidth}x${targetHeight}`);

    await image
      .resize(targetWidth, targetHeight, {
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy,
      })
      .toFile(outputFilePath);

    console.log(`[downloadImageToTempFile] Resized image saved to: ${outputFilePath}`);

    // Удаляем исходное изображение, если не нужно
    await fs.unlink(filePath);

    return outputFilePath;
  } catch (error) {
    console.error('[downloadImageToTempFile] Error downloading or resizing image:', error.message);
    throw error;
  }
}



