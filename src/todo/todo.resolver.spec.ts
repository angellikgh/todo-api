import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@/common/prisma.service';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';

describe('TodoResolver', () => {
  let resolver: TodoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoResolver, TodoService, PrismaService],
    }).compile();

    resolver = module.get<TodoResolver>(TodoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
