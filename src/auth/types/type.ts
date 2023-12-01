import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@/user/models/user.model';

export type UserWithoutSensitiveInfo = Omit<User, 'password'>;

@ObjectType()
export class SignInResponse extends User {
  @Field()
  token: string;
}
