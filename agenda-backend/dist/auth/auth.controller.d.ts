import type { Request } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getCaptcha(req: Request): {
        question: string;
    };
    private verifyCaptcha;
    getCsrf(req: Request): {
        csrfToken: `${string}-${string}-${string}-${string}-${string}`;
    };
    private verifyCsrf;
    register(dto: RegisterDto, req: Request): Promise<{
        access_token: string;
        user: {
            id: import("mongoose").Types.ObjectId;
            email: string;
            username: string;
        };
    }>;
    login(dto: LoginDto, req: Request): Promise<{
        access_token: string;
        user: {
            id: import("mongoose").Types.ObjectId;
            username: string;
            email: string;
            avatar: string;
        };
    }>;
}
