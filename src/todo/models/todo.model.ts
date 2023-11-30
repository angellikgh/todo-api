import { User } from '@/user/models/user.model';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

@ObjectType()
export class Todo {
  @Field(() => String)
  @IsString()
  title: string;

  @Field(() => String)
  @IsString()
  content: string;

  @Field(() => Int, { nullable: true })
  @IsNumber()
  creatorId: number;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  @ValidateNested()
  creator?: User;
}
