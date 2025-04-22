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
    const ext = extMatch ? extMatch[0] : '.jpg'; // по умолчанию .jpg если нет расширения

    const fileName = `image-${Date.now()}${ext}`;
    const filePath = path.join(tmpdir(), fileName);

    console.log(`[downloadImageToTempFile] Downloading to: ${filePath}`);

    const response = await axios.get(url, { responseType: 'arraybuffer' });

    // Сохраняем изображение временно
    await fs.writeFile(filePath, response.data);
    console.log(`[downloadImageToTempFile] Image saved to: ${filePath}`);

    // Обработка изображения (масштабирование)
    const outputFilePath = path.join(tmpdir(), `resized-${Date.now()}${ext}`);
    console.log(
      `[downloadImageToTempFile] Resizing image to ${targetWidth}x${targetHeight}`,
    );

    // Добавляем проверку на успешное завершение sharp
    await sharp(filePath)
      .resize(targetWidth, targetHeight, {
        fit: sharp.fit.cover, // Используем cover для точного соответствия размерам
        position: sharp.strategy.entropy, // Используем стратегию выбора области с наибольшей детализацией (по желанию)
      })
      .toFile(outputFilePath)
      .then(() => {
        console.log(
          `[downloadImageToTempFile] Resized image saved to: ${outputFilePath}`,
        );
      })
      .catch((resizeError) => {
        console.error(
          '[downloadImageToTempFile] Error during image resizing:',
          resizeError,
        );
        throw resizeError;
      });

    // Удаляем исходное изображение, если не нужно
    await fs.unlink(filePath);

    return outputFilePath;
  } catch (error) {
    console.error(
      '[downloadImageToTempFile] Error downloading or resizing image:',
      error.message,
    );
    throw error;
  }
}

