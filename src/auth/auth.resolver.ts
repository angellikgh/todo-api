import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { User } from '@/user/models/user.model';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { SignInResponse } from './types/type';

@Resolver()
@Public()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SignInResponse, { name: 'signIn' })
  @Public()
  async signIn(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return await this.authService.signIn({
      email,
      password,
    });
  }

  @Mutation(() => User, { name: 'signUp' })
  async signUp(
    @Args('email') email: string,
    @Args('name') name: string,
    @Args('password') password: string,
  ) {
    return await this.authService.signUp({
      email,
      name,
      password,
    });
  }
}
