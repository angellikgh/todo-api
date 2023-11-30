import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './models/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'getUser' })
  async getUser(@Args('id', { type: () => Int }) userId: number) {
    return this.userService.findOne(userId);
  }
  @Mutation(() => User)
  async createUser(@Args('data') userData: CreateUserInput) {
    return await this.userService.create(userData);
  }

  @Mutation(() => User)
  async updateUser(@Args('data') userData: UpdateUserInput) {
    return await this.userService.update(userData.id, userData);
  }
}
