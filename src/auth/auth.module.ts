import { Module } from '@nestjs/common';
import { PrismaService } from '@/common/prisma.service';
import { UserModule } from '@/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { UserService } from '@/user/user.service';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtAuthGuard } from './guards/auth.guard';
import { JwtStrategy } from './guards/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    ConfigModule,
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    }),

    UserModule,
  ],
  providers: [
    JwtStrategy,
    AuthResolver,
    AuthService,
    PrismaService,
    UserService,

    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}
