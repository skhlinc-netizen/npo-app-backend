import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get('welcome')
  getWelcome(): string {
    return 'Welcome to the NPO App Backend!';
  }

  @Get('health')
  checkHealth(): { status: string } {
    return { status: 'healthy' };
  }
}
