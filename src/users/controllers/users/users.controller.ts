import { Controller, Get, Post, Body, Param, Query, UsePipes } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(@Query('sortBy') sortBy: string) {
        return {sortBy};
    }

   @Post()
   @UsePipes()
   createuser(@Body() userData: CreateUserDto) {
        console.log(userData.username); 
        return {userData} 
   }

   @Get(':id')
   getUserById(@Param('id') id: string) {
    return {id}
    
   }
}
