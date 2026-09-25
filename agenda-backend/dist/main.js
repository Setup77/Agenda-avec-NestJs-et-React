"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const express_session_1 = __importDefault(require("express-session"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const isProduction = process.env.NODE_ENV === 'production';
    app.enableCors({
        origin: isProduction ? true : 'http://localhost:5173',
        credentials: true,
        methods: ['GET', 'POST', 'HEAD', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
    app.use((0, express_session_1.default)({
        secret: process.env.SESSION_SECRET || 'CAPTCHA_CSRF_SECRET',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: isProduction,
            httpOnly: true,
            sameSite: isProduction ? 'none' : 'lax',
        },
    }));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Application is running on port: ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map