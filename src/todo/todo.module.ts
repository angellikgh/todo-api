import { Module } from '@nestjs/common';
import { PrismaService } from '@/common/prisma.service';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';

@Module({
  providers: [TodoResolver, TodoService, PrismaService],
})
export class TodoModule {}
