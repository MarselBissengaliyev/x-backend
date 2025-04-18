import { Module } from '@nestjs/common';
import { ContentSettingsService } from './content-settings.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ContentSettingsController } from './content-settings.controller';

@Module({
  providers: [ContentSettingsService],
  imports: [PrismaModule],
  exports: [ContentSettingsService],
  controllers: [ContentSettingsController]
})
export class ContentSettingsModule {}
