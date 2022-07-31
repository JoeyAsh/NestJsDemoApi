import {NestFactory} from '@nestjs/core';
import {DataApiModule} from './data-api.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

export async function dataApiBootstrap() {
    const app = await NestFactory.create(DataApiModule);
    app.setGlobalPrefix('api');
    const config = new DocumentBuilder()
        .setTitle('Data API')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
    await app.listen(5000);
    console.log(`Data API is running on: ${await app.getUrl()}`);
}
