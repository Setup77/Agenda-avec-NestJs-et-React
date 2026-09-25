import type { Request } from 'express';
import { EventsService } from './events.service';
interface RequestWithUser extends Request {
    user: {
        userId: string;
    };
}
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(req: RequestWithUser, body: {
        title: string;
        description?: string;
        start: string;
        end: string;
        color?: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("./schemas/event.schema").EventDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/event.schema").Event & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findMyEvents(req: RequestWithUser): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/event.schema").EventDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/event.schema").Event & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findEventsByUser(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/event.schema").EventDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/event.schema").Event & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    updateEvent(req: RequestWithUser, id: string, body: {
        title?: string;
        description?: string;
        start?: string;
        end?: string;
        color?: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("./schemas/event.schema").EventDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/event.schema").Event & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteEvent(req: RequestWithUser, id: string): Promise<{
        success: boolean;
    }>;
}
export {};
