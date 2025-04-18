import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ContentSettingsService } from './content-settings.service';
import { CreateContentSettingDto, GenerateDto } from './content-settings.dto';

@Controller('content-settings')
export class ContentSettingsController {
  constructor(private readonly contentSettingsService: ContentSettingsService) {}

  @Post()
  create(@Body() dto: CreateContentSettingDto) {
    return this.contentSettingsService.create(dto);
  }

  @Post('/generate')
  generate(@Body() dto: GenerateDto) {
    return this.contentSettingsService.generate(dto);
  }

  @Get('/:accountId')
  findOne(@Param('accountId') accountId: string) {
    return this.contentSettingsService.findByAccountId(accountId);
  }
}
