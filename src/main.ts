import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    cors({
      origin: 'http://localhost:3000', // Or '*', to allow all origins (for development purposes)
    }),
  );
  await app.listen(3001);
}
bootstrap();
