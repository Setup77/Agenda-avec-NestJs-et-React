import { Document, Types } from 'mongoose';
export type EventDocument = Event & Document;
export declare class Event {
    title: string;
    description?: string;
    start: Date;
    end: Date;
    user: Types.ObjectId;
    color: string;
}
export declare const EventSchema: import("mongoose").Schema<Event, import("mongoose").Model<Event, any, any, any, (Document<unknown, any, Event, any, import("mongoose").DefaultSchemaOptions> & Event & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Event, any, import("mongoose").DefaultSchemaOptions> & Event & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, Event>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Event, Document<unknown, {}, Event, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Event & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Event, Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Event & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    description?: import("mongoose").SchemaDefinitionProperty<string, Event, Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Event & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    start?: import("mongoose").SchemaDefinitionProperty<Date, Event, Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Event & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    end?: import("mongoose").SchemaDefinitionProperty<Date, Event, Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Event & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    user?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Event, Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Event & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    color?: import("mongoose").SchemaDefinitionProperty<string, Event, Document<unknown, {}, Event, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Event & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, Event>;
