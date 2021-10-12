import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/')
  async login(@Body() body: Record<string, string>) {
    return this.authService.generateToken(body);
  }
}
