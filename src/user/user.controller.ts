import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {

  }

    @Get()
    getUser() {
        // return 'I\'m from user component'
        return this.userService.get();
    }
  
    @Post()
    store(@Req() req: Request) {
      // return req.body;
      return this.userService.create(req)
    }
  
    @Patch('/:userId')
    update(@Req() req: Request) {
      return req.body;
    }
  
    // @Get('/:userId')
    // getUser(@Param() params: { userId: number }) {
    //   return params
    // }
  
    @Delete('/:userId')
    deleteUser(@Param() params: { userId: number }) {
      return params
    }
}
