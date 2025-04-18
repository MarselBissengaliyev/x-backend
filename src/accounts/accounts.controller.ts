import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateAccountDto } from './accounts.dto';
import { AccountsService } from './accounts.service';
import { Request } from 'express';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountService: AccountsService) {}

  @Post()
  async create(@Body() dto: CreateAccountDto, @Req() req: Request) {
    const userAgent = req.headers['user-agent'] || 'default';
    return this.accountService.create(dto, userAgent);
  }

  @Post('submit-code')
  async submitCode(@Body() body: { sessionId: string, code: string }) {
    const { sessionId, code } = body;
    return this.accountService.submitCode(sessionId, code);
  }

  @Get()
  async findAll() {
    return this.accountService.findAll();
  }
}
