import { Module } from '@nestjs/common';
import { PuppeteerService } from './puppeteer.service';
import { PuppeteerController } from './puppeteer.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PuppeteerService],
  imports: [PrismaModule],
  exports: [PuppeteerService],
  controllers: [PuppeteerController]
})
export class PuppeteerModule {}
