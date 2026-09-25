"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const auth_service_1 = require("./auth.service");
const register_dto_1 = require("./dto/register.dto");
const login_dto_1 = require("./dto/login.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    getCaptcha(req) {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        req.session.captcha = {
            value: a + b,
            expiresAt: Date.now() + 2 * 60 * 1000,
        };
        return { question: `${a} + ${b} = ?` };
    }
    verifyCaptcha(input, req) {
        const captcha = req.session.captcha;
        if (!captcha) {
            throw new common_1.BadRequestException('Captcha expiré');
        }
        if (Date.now() > captcha.expiresAt) {
            req.session.captcha = undefined;
            throw new common_1.BadRequestException('Captcha expiré');
        }
        if (Number(input) !== captcha.value) {
            req.session.captcha = undefined;
            throw new common_1.BadRequestException('Captcha incorrect');
        }
        req.session.captcha = undefined;
    }
    getCsrf(req) {
        const token = (0, crypto_1.randomUUID)();
        req.session.csrfToken = token;
        return { csrfToken: token };
    }
    verifyCsrf(token, req) {
        if (!req.session.csrfToken || token !== req.session.csrfToken) {
            throw new common_1.BadRequestException('CSRF invalide');
        }
    }
    async register(dto, req) {
        this.verifyCaptcha(dto.captcha, req);
        this.verifyCsrf(dto.csrfToken, req);
        return this.authService.register(dto);
    }
    async login(dto, req) {
        this.verifyCsrf(dto.csrfToken, req);
        return this.authService.login(dto.login, dto.password);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)('captcha'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getCaptcha", null);
__decorate([
    (0, common_1.Get)('csrf-token'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getCsrf", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map