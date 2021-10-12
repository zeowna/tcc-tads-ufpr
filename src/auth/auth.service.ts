import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findByEmail(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;

      return result as User;
    }
    return null;
  }

  async generateToken(user: Record<string, string>) {
    const userFound = await this.validateUser(user.email, user.password);

    const payload = {
      sub: userFound.id,
      email: userFound.email,
      scopes: userFound.role,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
