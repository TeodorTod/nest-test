import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { AppService } from "src/app.service";
import { Request } from 'express';

@Controller('/user')

export class UserController {


    @Get()
    getUser1() {
        return 'I\'m from user component'
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