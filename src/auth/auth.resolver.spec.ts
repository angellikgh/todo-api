import { Test, TestingModule } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '@/user/user.module';
import { PrismaService } from '@/common/prisma.service';
import { UserService } from '@/user/user.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './guards/jwt.strategy';

describe('AuthResolver', () => {
  let resolver: AuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
      ],
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
