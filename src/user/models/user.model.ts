import { ObjectType, Field, HideField, ID } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsString, IsStrongPassword } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => ID)
  @IsNumber()
  id: number;

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
