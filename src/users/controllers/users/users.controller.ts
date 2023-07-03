import { Controller, Get, Post, Body, Param, Query, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')

export class UsersController {

    constructor(private usersService: UsersService) {

    }

    @Get()
    @UseGuards(AuthGuard)
    getUsers() {
        return this.usersService.fetchUsers();
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createuser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
        console.log(userData.age.toPrecision());
        return this.usersService.createUser(userData);
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
       return this.usersService.fetchUserById(id);
    }
}
