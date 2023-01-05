import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify/adapters';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule,new FastifyAdapter());

  const config = new DocumentBuilder()
    .setTitle('TITLE')
    .setDescription('abcd ')
    .setVersion('1.0')
    .addTag('XD')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(`${process.env.PORT}`,`0.0.0.0`);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
