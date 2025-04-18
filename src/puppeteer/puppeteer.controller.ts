import { Body, Controller, Logger, Post } from '@nestjs/common';
import { PuppeteerService } from './puppeteer.service';
import { PostDto } from './puppeteer.dto';

@Controller('puppeteer')
export class PuppeteerController {
    private readonly logger = new Logger(PuppeteerController.name);
  constructor(private puppeteerService: PuppeteerService) {}

  @Post('submit-post')
  async submitPost(@Body() postDto: PostDto) {
    this.logger.log('Submitting post to X Composer...');
    const result = await this.puppeteerService.submitPost(postDto);

    if (result.success) {
      this.logger.log('Post successfully submitted');
      return { message: 'Post successfully submitted' };
    } else {
      this.logger.error('Post submission failed');
      throw new Error('Post submission failed');
    }
  }
}
