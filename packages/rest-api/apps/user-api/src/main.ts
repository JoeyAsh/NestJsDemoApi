import {NestFactory} from '@nestjs/core';
import {UserApiModule} from './user-api.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

export async function userApiBootstrap() {
    const app = await NestFactory.create(UserApiModule);
    app.setGlobalPrefix('api');
    const config = new DocumentBuilder()
        .setTitle('User API')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
    await app.listen(5001);
    console.log(`User API is running on: ${await app.getUrl()}`);
}
