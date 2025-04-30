import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { drive_v3, google } from 'googleapis';
import * as path from 'path';

@Injectable()
export class GoogleDriveService {
  private drive: drive_v3.Drive;

  constructor() {
    this.drive = google.drive({ version: 'v3' });
    google.options({ auth: process.env.GOOGLE_API_KEY });
  }

  async getImagesFromFolder(folderId: string): Promise<string[]> {
    const res = await this.drive.files.list({
      q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
      fields: 'files(id, name)',
      key: process.env.GOOGLE_API_KEY, // указываем явно API ключ
    });

    return res.data.files?.map((file) => file.id!) ?? [];
  }

  async downloadFile(fileId: string): Promise<string> {
    const downloadsDir = path.resolve('./downloads');
  
    // ✅ Проверка и создание папки, если её нет
    if (!fs.existsSync(downloadsDir)) {
      fs.mkdirSync(downloadsDir, { recursive: true });
    }
  
    const filePath = path.join(downloadsDir, `${fileId}.jpg`);
    const dest = fs.createWriteStream(filePath);
  
    const res = await this.drive.files.get(
      {
        fileId,
        alt: 'media',
        key: process.env.GOOGLE_API_KEY,
      },
      { responseType: 'stream' },
    );
  
    return new Promise((resolve, reject) => {
      res.data
        .on('end', () => {
          console.log('Download complete');
          resolve(filePath);
        })
        .on('error', (err) => {
          console.error('Error downloading file.');
          reject(err);
        })
        .pipe(dest);
    });
  }
  
}
