import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private jwtServive: JwtService) {}

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }

    async generateToken(user: any): Promise<string> {
        const payload = { username: user.username, sub: user.id };
        return this.jwtServive.sign(payload);
    }

}
