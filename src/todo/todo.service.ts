import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/prisma.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTodoInput) {
    return this.prisma.todo.create({
      data,
    });
  }

  findOneById(id: number) {
    return this.prisma.todo.findFirst({
      where: {
        id,
      },
    });
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findOne(id: number) {
    return this.prisma.todo.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, data: UpdateTodoInput) {
    return this.prisma.todo.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }
}
