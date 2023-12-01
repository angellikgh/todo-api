import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@/common/prisma.service';
import { UserService } from '@/user/user.service';
import { CreateUserInput } from '@/user/dto/create-user.input';
import { User } from '@/user/models/user.model';
import * as bcrypt from 'bcrypt';
import { SignInInput } from './dto/signin.input';
import { UserWithoutSensitiveInfo, hashSalt } from './types/type';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(data: SignInInput) {
    const { email, password } = data;
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException();
    }

    const isMatchPassword = await bcrypt.compare(password, user?.password);
    if (!isMatchPassword) {
      throw new BadRequestException();
    }

    const payload: UserWithoutSensitiveInfo = user;
    return {
      token: this.jwtService.signAsync(payload),
      ...payload,
    };
  }

  async signUp(data: CreateUserInput) {
    return this.userService.create({
      ...data,
      password: await bcrypt.hash(data?.password || '', hashSalt),
    });
  }

  async validateUser(email: string): Promise<User | null> {
    const user: User | null = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  }
}
