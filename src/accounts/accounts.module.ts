import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AccountsController } from './accounts.controller';
import { PuppeteerModule } from 'src/puppeteer/puppeteer.module';

@Module({
  providers: [AccountsService],
  imports: [PrismaModule, PuppeteerModule],
  controllers: [AccountsController]
})
export class AccountsModule {}
