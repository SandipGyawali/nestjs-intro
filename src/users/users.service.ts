/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [
    { name: 'Sandip', age: 20, isAuth: true },
    { name: 'Adam', age: 22, isAuth: false },
    { name: 'Krish', age: 30, isAuth: true },
  ];

  /**
   * @Note return all the users from the array list
   */
  findAll(): User[] {
    return this.users;
  }

  /**
   *
   * @param age
   * @returns User interface object
   */
  findOne(age: number) {
    if (age == undefined || age == null) {
      return 'Id not provided, Failed';
    }
    const user = this.users.find((user) => user.age == age);
    return user;
  }

  /**
   * @Note create a user and then return the user created
   */
  create(user: User): User {
    this.users.push(user);
    return user;
  }

  /**
   *
   * @param age
   * @returns string with the success and unsuccess message
   */
  delete(age: number): string {
    console.log(age);
    const newUsers: User[] = this.users.map((user) => {
      if (user.age != age) {
        return user;
      }
    });

    this.users = newUsers;
    return 'Deleted successfully';
  }

  patchOne(age: number, user: User) {
    const existsUser = this.users.find((user) => user.age == age);
    if (!existsUser) {
      return `The user does not exists with the age: ${existsUser}`;
    }

    existsUser.age = user.age;
    existsUser.isAuth = user.isAuth;

    return existsUser;
  }
}
