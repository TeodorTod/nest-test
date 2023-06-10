import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
    get() {
        return { name: 'Pesho', age: '20' }
    }

    create(req: Request) {
        return req.body;
    }
}
