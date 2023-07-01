import { Controller, Get, Post, Body, Param, Query, UsePipes, ValidationPipe,ParseIntPipe, ParseBoolPipe  } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
        return {sortDesc};
    }

   @Post()
   @UsePipes(new ValidationPipe())
   createuser(@Body() userData: CreateUserDto) {
        console.log(userData.username); 
        return {userData} 
   }

   @Get(':id')
   getUserById(@Param('id', ParseIntPipe) id: number) {
    return {id}
    
   }
}
