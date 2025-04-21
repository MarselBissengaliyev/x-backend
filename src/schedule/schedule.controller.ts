import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { SchedulePostDto } from './schedule.dto';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly service: ScheduleService) {}

  @Post('schedule-post')
  async schedulePost(@Body() dto: SchedulePostDto, @Req() req: Request) {
    const userAgent = req.headers['user-agent'] || 'default';
    return this.service.schedulePost(dto, userAgent);
  }

  @Get('/scheduled-posts/:accountId')
  getScheduled(@Param('accountId') accountId: string) {
    return this.service.index(accountId);
  }

  @Delete('/scheduled-post/:id')
  async deleteScheduledPost(@Param('id') id: string) {
    await this.service.removeScheduledPostJob(id);
  }
}
