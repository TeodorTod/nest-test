import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    get() {
        return { name: 'Sarthak Shrivastava', email: 'sarthak@bitfumes.com' };
    }

    create(createUserDto: CreateUserDto) {
        return createUserDto;
    }

    update(updateuserDto: UpdateUserDto, userId: number) {
        return { body: updateuserDto, userId };
    }

    show(userId: number) {
        return { userId };
    }

    delete(userId: number) {
        return { userId };
    }
}
