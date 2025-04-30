import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ContentGenerationService } from './content-generation.service';
import { GenerateDto } from './content-generation.dto';

@Controller('content-generation')
export class ContentGenerationController {
  constructor(private readonly contentGenerationService: ContentGenerationService) {}


  @Post('/generate')
  generate(@Body() dto: GenerateDto) {
    return this.contentGenerationService.generate(dto);
  }
}
