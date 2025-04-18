import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { SchedulePostDto } from './schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly service: ScheduleService) {}

  @Post('schedule-post')
  async schedulePost(@Body() dto: SchedulePostDto) {
    return this.service.schedulePost(dto);
  }

  @Get('/scheduled-posts/:accountId')
  getScheduled(@Param('accountId') accountId: string) {
    return this.service.index(accountId);
  }
}
