import { Controller, Get, Param, Post, Req, Delete, Patch } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user')
  showUser() {
    return { name: 'Pesho', age: '20' }
  }

  @Post()
  store(@Req() req: Request) {
    return req.body;
  }

  @Patch('/:userId')
  update(@Req() req: Request) {
    return req.body;
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return params
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return params
  }
}
