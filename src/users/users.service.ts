import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly users: any = [
    {
      id: 1,
      name: 'John Doe',
      phone: '123456789',
    },
    {
      id: 2,
      name: 'Megumin',
      phone: '987654321',
    },
  ];

  getAllUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);
    return {
      ...user,
      id: this.users.length + 1,
    };
  }
}
