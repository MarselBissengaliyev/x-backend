import { Body, Controller, Logger, Post, Req } from '@nestjs/common';
import { PuppeteerService } from './puppeteer.service';
import { PostDto } from './puppeteer.dto';
import { Request } from 'express';

@Controller('puppeteer')
export class PuppeteerController {
    private readonly logger = new Logger(PuppeteerController.name);
  constructor(private puppeteerService: PuppeteerService) {}

  @Post('submit-post')
  async submitPost(@Body() postDto: PostDto, @Req() req: Request) {
    this.logger.log('Submitting post to X Composer...');
    const userAgent = req.headers['user-agent'] || 'default';
    const result = await this.puppeteerService.submitPost(postDto, userAgent);

    if (result.success) {
      this.logger.log('Post successfully submitted');
      return { message: 'Post successfully submitted' };
    } else {
      this.logger.error('Post submission failed');
      throw new Error('Post submission failed');
    }
  }
}
