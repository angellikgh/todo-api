import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/prisma.service';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(userData: CreateUserInput) {
    return this.prisma.user.create({
      data: {
        password: '',
        ...userData,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({});
  }

  findOne(id: number) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, userData: UpdateUserInput) {
    return this.prisma.user.update({
      data: userData,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
