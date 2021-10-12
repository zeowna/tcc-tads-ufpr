import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { readFileSync } from 'fs';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: readFileSync(process.env.JWT_PUBLIC_KEY),
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.username, role: payload.scopes };
  }
}
