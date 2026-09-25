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
exports.EventsController = void 0;
const common_1 = require("@nestjs/common");
const events_service_1 = require("./events.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const public_decorator_1 = require("../auth/public.decorator");
let EventsController = class EventsController {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    async create(req, body) {
        const start = new Date(body.start);
        const end = new Date(body.end);
        if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
            throw new common_1.BadRequestException('Dates invalides');
        }
        if (end <= start) {
            throw new common_1.BadRequestException('La date de fin doit être supérieure à la date de début');
        }
        return this.eventsService.create({
            title: body.title,
            description: body.description,
            start,
            end,
            color: body.color,
            userId: req.user.userId,
        });
    }
    async findMyEvents(req) {
        return this.eventsService.findByUser(req.user.userId);
    }
    async findEventsByUser(userId) {
        return this.eventsService.findByUser(userId);
    }
    async updateEvent(req, id, body) {
        const start = body.start ? new Date(body.start) : undefined;
        const end = body.end ? new Date(body.end) : undefined;
        if (start && Number.isNaN(start.getTime())) {
            throw new common_1.BadRequestException('Date start invalide');
        }
        if (end && Number.isNaN(end.getTime())) {
            throw new common_1.BadRequestException('Date end invalide');
        }
        if (start && end && end <= start) {
            throw new common_1.BadRequestException('La date de fin doit être supérieure à la date de début');
        }
        const updated = await this.eventsService.updateOwnedEvent(id, req.user.userId, {
            title: body.title,
            description: body.description,
            start,
            end,
            color: body.color,
        });
        if (!updated) {
            throw new common_1.NotFoundException('Event introuvable ou accès refusé');
        }
        return updated;
    }
    async deleteEvent(req, id) {
        const deleted = await this.eventsService.deleteOwnedEvent(id, req.user.userId);
        if (!deleted) {
            throw new common_1.NotFoundException('Événement introuvable ou accès refusé');
        }
        return { success: true };
    }
};
exports.EventsController = EventsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "findMyEvents", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "findEventsByUser", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "updateEvent", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "deleteEvent", null);
exports.EventsController = EventsController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('events'),
    __metadata("design:paramtypes", [events_service_1.EventsService])
], EventsController);
//# sourceMappingURL=events.controller.js.map