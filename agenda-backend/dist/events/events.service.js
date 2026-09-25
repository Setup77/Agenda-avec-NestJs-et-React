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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const event_schema_1 = require("./schemas/event.schema");
let EventsService = class EventsService {
    constructor(eventModel) {
        this.eventModel = eventModel;
    }
    async create(data) {
        if (data.end <= data.start) {
            throw new common_1.BadRequestException('La date de fin doit être supérieure à la date de début');
        }
        const event = new this.eventModel({
            title: data.title,
            description: data.description,
            start: data.start,
            end: data.end,
            user: new mongoose_2.Types.ObjectId(data.userId),
            color: data.color,
        });
        return event.save();
    }
    async findByUser(userId) {
        return this.eventModel
            .find({ user: new mongoose_2.Types.ObjectId(userId) })
            .populate('user', 'username')
            .sort({ start: 1 })
            .exec();
    }
    async updateOwnedEvent(eventId, userId, patch) {
        const existing = await this.eventModel.findOne({
            _id: new mongoose_2.Types.ObjectId(eventId),
            user: new mongoose_2.Types.ObjectId(userId),
        });
        if (!existing)
            return null;
        const finalStart = patch.start ?? existing.start;
        const finalEnd = patch.end ?? existing.end;
        if (finalEnd <= finalStart) {
            throw new common_1.BadRequestException('La date de fin doit être supérieure à la date de début');
        }
        if (patch.title !== undefined)
            existing.title = patch.title;
        if (patch.description !== undefined)
            existing.description = patch.description;
        if (patch.start !== undefined)
            existing.start = patch.start;
        if (patch.end !== undefined)
            existing.end = patch.end;
        if (patch.color !== undefined)
            existing.color = patch.color;
        return existing.save();
    }
    async deleteOwnedEvent(eventId, userId) {
        return this.eventModel
            .findOneAndDelete({
            _id: new mongoose_2.Types.ObjectId(eventId),
            user: new mongoose_2.Types.ObjectId(userId),
        })
            .exec();
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(event_schema_1.Event.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EventsService);
//# sourceMappingURL=events.service.js.map