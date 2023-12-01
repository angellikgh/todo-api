import { ObjectType, Field, HideField } from '@nestjs/graphql';
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

@ObjectType()
export class User {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  name: string;

  @HideField()
  @IsStrongPassword()
  password: string;
}
