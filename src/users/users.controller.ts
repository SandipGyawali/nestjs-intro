/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(): Array<User> {
    return this.userService.findAll();
  }

  @Get(':age')
  findOne(@Param('age', ParseIntPipe) age: number) {
    return this.userService.findOne(age);
  }

  @Post()
  create(@Body() user: User): User {
    return this.userService.create(user);
  }

  @Patch(':age')
  patchOne(@Param('age', ParseIntPipe) age: number, @Body() user: User) {
    return this.userService.patchOne(age, user);
  }

  @Delete(':age')
  delete(@Param('age', ParseIntPipe) age: number): string {
    return this.userService.delete(age);
  }
}
