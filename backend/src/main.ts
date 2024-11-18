import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir requisições do frontend
  app.enableCors({
    origin: 'http://localhost:3000',  // Permite apenas o frontend
  });

  // Habilita a validação global
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));

  await app.listen(4000);
}
bootstrap();
