import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { TodoService } from '../todo.service';

@Injectable()
export class CanUpdateOrDeleteGuard implements CanActivate {
  constructor(private readonly todoService: TodoService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlContext = GqlExecutionContext.create(context);
    const { user } = gqlContext.getContext().req;
    const { id } = gqlContext.getArgs();

    const todo = await this.todoService.findOneById(id);

    if (!todo) {
      throw new HttpException('No permission', HttpStatus.FORBIDDEN);
    }

    return user.id === todo.creatorId;
  }
}
