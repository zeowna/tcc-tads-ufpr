import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { readFileSync } from 'fs';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => {
        const options: JwtModuleOptions = {
          privateKey: readFileSync(process.env.JWT_PRIVATE_KEY),
          publicKey: readFileSync(process.env.JWT_PUBLIC_KEY),
          signOptions: {
            expiresIn: '3h',
            issuer: 'Rest API',
            algorithm: 'RS256',
          },
        };
        return options;
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
