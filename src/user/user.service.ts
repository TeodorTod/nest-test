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

    update(updateuserDto: UpdateUserDto, param: { userId: number }) {
        return { body: updateuserDto, param };
    }

    show(param: { userId: number }) {
        return param;
    }

    delete(param: { userId: number }) {
        return param;
    }
}
