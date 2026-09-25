import { Model, Types } from 'mongoose';
import { Event, EventDocument } from './schemas/event.schema';
export declare class EventsService {
    private eventModel;
    constructor(eventModel: Model<EventDocument>);
    create(data: {
        title: string;
        description?: string;
        start: Date;
        end: Date;
        color?: string;
        userId: string;
    }): Promise<import("mongoose").Document<unknown, {}, EventDocument, {}, import("mongoose").DefaultSchemaOptions> & Event & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findByUser(userId: string): Promise<(import("mongoose").Document<unknown, {}, EventDocument, {}, import("mongoose").DefaultSchemaOptions> & Event & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    updateOwnedEvent(eventId: string, userId: string, patch: {
        title?: string;
        description?: string;
        start?: Date;
        end?: Date;
        color?: string;
    }): Promise<import("mongoose").Document<unknown, {}, EventDocument, {}, import("mongoose").DefaultSchemaOptions> & Event & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteOwnedEvent(eventId: string, userId: string): Promise<import("mongoose").Document<unknown, {}, EventDocument, {}, import("mongoose").DefaultSchemaOptions> & Event & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
}
