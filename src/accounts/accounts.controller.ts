import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateAccountDto } from './accounts.dto';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountService: AccountsService) {}

  @Post()
  async create(@Body() dto: CreateAccountDto, @Req() req: Request) {
    const userAgent = req.headers['user-agent'] || 'default';
    return this.accountService.create(dto, userAgent);
  }

  @Post('submit-code')
  async submitCode(@Body() body: { sessionId: string; code: string }) {
    const { sessionId, code } = body;
    return this.accountService.submitCode(sessionId, code);
  }

  @Get()
  async findAll() {
    return this.accountService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.accountService.findById(id);
  }
}
