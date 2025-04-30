import axios from 'axios';
import * as fs from 'fs';  // Используем обычный fs для синхронных операций
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


export async function downloadImageToTempFile(
  url: string,
  targetWidth: number,
  targetHeight: number,
): Promise<string> {
  console.log('[downloadImageToTempFile] Start downloading image:', url);

  if (!url || typeof url !== 'string' || url.trim() === '') {
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
    await fs.promises.writeFile(filePath, response.data);
    console.log(`[downloadImageToTempFile] Image saved to: ${filePath}`);

    // Получение размеров изображения перед изменением
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Проверка размера изображения
    if (!metadata.size || metadata.size <= 0 || metadata.size > 3 * 1024 * 1024) {
      console.error('[downloadImageToTempFile] Image size is either invalid or exceeds 3MB, resizing...');
      // Создаём новый путь для выходного файла
      const resizedFilePath = path.join(tmpdir(), `resized-${Date.now()}${ext}`);
      await image.resize(targetWidth, targetHeight).toFile(resizedFilePath);
      console.log(`[downloadImageToTempFile] Resized image saved to: ${resizedFilePath}`);
      
      // Проверяем и удаляем исходный файл, если он существует
      if (fs.existsSync(filePath)) {
        console.log('[downloadImageToTempFile] Waiting before deleting the file...');
        await delay(3000); // Задержка 3 секунды
        await deleteFile(filePath); // Используем сторонний метод для удаления
      }

      return resizedFilePath; // Возвращаем путь к новому файлу
    }

    // Проверка на соотношение сторон 1:1
    if (metadata.width && metadata.height) {
      const minDimension = Math.min(metadata.width, metadata.height);
      if (minDimension > 0 && metadata.width !== metadata.height) {
        console.log('[downloadImageToTempFile] Cropping image to 1:1 aspect ratio');
        // Создаём новый путь для выходного файла
        const croppedFilePath = path.join(tmpdir(), `cropped-${Date.now()}${ext}`);
        await image
          .resize(minDimension, minDimension)
          .extract({
            left: (metadata.width - minDimension) / 2,
            top: (metadata.height - minDimension) / 2,
            width: minDimension,
            height: minDimension,
          })
          .toFile(croppedFilePath);
        console.log(`[downloadImageToTempFile] Cropped image saved to: ${croppedFilePath}`);
        
        // Проверяем и удаляем исходный файл, если он существует
        if (fs.existsSync(filePath)) {
          console.log('[downloadImageToTempFile] Waiting before deleting the file...');
          await delay(3000); // Задержка 3 секунды
          await deleteFile(filePath); // Используем сторонний метод для удаления
        }

        return croppedFilePath; // Возвращаем путь к новому файлу
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

    // Проверяем и удаляем исходное изображение, если оно не нужно
    if (fs.existsSync(filePath)) {
      console.log('[downloadImageToTempFile] Waiting before deleting the file...');
      await delay(3000); // Задержка 3 секунды
      await deleteFile(filePath); // Используем сторонний метод для удаления
    }

    return outputFilePath;
  } catch (error) {
    console.error('[downloadImageToTempFile] Error downloading or resizing image:', error.message);
    throw error;
  }
}
