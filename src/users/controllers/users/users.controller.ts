import { Controller, Get, Post, Body, Param, Query, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {

    }

    @Get()
    getUsers() {
        return this.usersService.fetchUsers();
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createuser(@Body() userData: CreateUserDto) {
        console.log(userData.username);
        return this.usersService.createUser(userData);
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
       return this.usersService.fetchUserById(id);
    }
}
