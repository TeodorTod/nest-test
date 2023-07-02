import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {

    fakeUsers = [
        { username: 'Pencho', email: 'pen40@pen.pen' },
        { username: 'Gincho', email: 'ginki4aa@pen.pen' },
        { username: 'Stacho', email: 'stanketoVe@pen.pen' },
    ]

    fetchUsers() {
        return this.fakeUsers;
    }

    createUser(userDetails: CreateUserType) {
        this.fakeUsers.push(userDetails);
        return this.fakeUsers;
    }

    fetchUserById(id: number) {
        return { id, username: 'Pencho', email: 'pen40@pen.pen' }
    }
}
