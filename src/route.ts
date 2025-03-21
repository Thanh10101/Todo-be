import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { UserModule } from './modules/users/user.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

export async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(process.env.PORT ?? 3000);
}
