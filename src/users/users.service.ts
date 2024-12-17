import { Injectable, NotFoundException } from '@nestjs/common';
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

  getUser(id: number) {
    const foundUser = this.users.find((user) => user.id === id);

    if (!foundUser) {
      return new NotFoundException(`User with ID ${id} not found`);
    }
    return foundUser;
  }

  createUser(user: CreateUserDto) {
    this.users.push({
      ...user,
      id: this.users.length + 1,
    });
    return user;
  }
}
