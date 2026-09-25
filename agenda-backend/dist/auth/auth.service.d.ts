import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(login: string, password: string): Promise<{
        access_token: string;
        user: {
            id: import("mongoose").Types.ObjectId;
            username: string;
            email: string;
            avatar: string;
        };
    }>;
    register(dto: RegisterDto): Promise<{
        access_token: string;
        user: {
            id: import("mongoose").Types.ObjectId;
            email: string;
            username: string;
        };
    }>;
}
