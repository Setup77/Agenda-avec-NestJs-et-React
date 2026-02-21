import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Activation CORS (frontend React Vite)
  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'HEAD', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.use(
    session({
      secret: 'CAPTCHA_CSRF_SECRET',
      resave: false,
      saveUninitialized: false, // Recommandé: false pour éviter de créer des sessions vides
      cookie: {
        secure: false, // false pour localhost (HTTP)
        httpOnly: true,
        sameSite: 'lax',
      },
    }),
  );

  // ✅ Validation globale DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
}

bootstrap();
