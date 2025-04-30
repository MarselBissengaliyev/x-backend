import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountsModule } from './accounts/accounts.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PuppeteerModule } from './puppeteer/puppeteer.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ContentGenerationModule } from './content-generation/content-generation.module';
import { GoogleDriveModule } from './google-drive/google-drive.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    AccountsModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ContentGenerationModule,
    PuppeteerModule,
    ScheduleModule,
    GoogleDriveModule,
  ],
})
export class AppModule {}
