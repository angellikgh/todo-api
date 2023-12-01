import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './models/todo.model';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { CanUpdateOrDeleteGuard } from './guards/can-update-or-delete.guard';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation(() => Todo)
  createTodo(@Args('data') todoData: CreateTodoInput) {
    return this.todoService.create(todoData);
  }

  @Query(() => [Todo], { name: 'listTodo' })
  listTodo() {
    return this.todoService.findAll();
  }

  @Query(() => Todo, { name: 'getTodo' })
  getTodo(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.findOne(id);
  }

  @Mutation(() => Todo)
  @UseGuards(CanUpdateOrDeleteGuard)
  async updateTodo(@Args('data') todoData: UpdateTodoInput) {
    return this.todoService.update(todoData.id, todoData);
  }

  @Mutation(() => Todo)
  @UseGuards(CanUpdateOrDeleteGuard)
  async removeTodo(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.remove(id);
  }
}
