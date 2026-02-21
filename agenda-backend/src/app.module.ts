import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static'; //---gère les fichiers
import { join } from 'path';

import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),

    MongooseModule.forRoot('mongodb://localhost:27017/agenda_db'),
    UsersModule,
    EventsModule,
    AuthModule,
  ],
})
export class AppModule {}
