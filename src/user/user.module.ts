import { Module } from '@nestjs/common';
import { PrismaService } from '@/common/prisma.service';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserResolver, UserService, PrismaService],
})
export class UserModule {}
