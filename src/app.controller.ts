import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserFormDto } from './user-form.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postData(@Body() UserFormDto: UserFormDto) {
    return this.appService.getData(UserFormDto);
  }
}
