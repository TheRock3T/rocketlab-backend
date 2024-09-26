import { Controller, Post, Body } from '@nestjs/common';
import { SpeedTestService } from './speed-test.service';

@Controller('speed-test')
export class SpeedTestController {
  constructor(private readonly speedTestService: SpeedTestService) {}

  @Post()
  async testSpeedDev(@Body('urls') urls: string[]) {
    const results = await this.speedTestService.testSpeedDev(urls);
    return results;
  }

  @Post()
  async testSpeedPreprod(@Body('urls') urls: string[]) {
    const results = await this.speedTestService.testSpeedPreprod(urls);
    return results;
  }

  @Post()
  async testSpeed(@Body('urls') urls: string[]) {
    const results = await this.speedTestService.testSpeed(urls);
    return results;
  }
}