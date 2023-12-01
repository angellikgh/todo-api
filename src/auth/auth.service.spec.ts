import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@/common/prisma.service';
import { UserModule } from '@/user/user.module';
import { UserService } from '@/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './guards/jwt.strategy';
import { AuthResolver } from './auth.resolver';

describe('AuthService', () => {
  let service: AuthService;

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

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
