import { Module } from '@nestjs/common';
import { ContentGenerationModule } from 'src/content-generation/content-generation.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PuppeteerModule } from 'src/puppeteer/puppeteer.module';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';

@Module({
  providers: [ScheduleService],
  controllers: [ScheduleController],
  imports: [PrismaModule, PuppeteerModule, ContentGenerationModule],
})
export class ScheduleModule {}
