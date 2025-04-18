import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountsModule } from './accounts/accounts.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ContentSettingsModule } from './content-settings/content-settings.module';
import { PuppeteerModule } from './puppeteer/puppeteer.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    AccountsModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ContentSettingsModule,
    PuppeteerModule,
    ScheduleModule,
  ],
})
export class AppModule {}
