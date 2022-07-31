import {NestFactory} from '@nestjs/core';
import {DataApiModule} from './data-api.module';

async function bootstrap() {
    const app = await NestFactory.create(DataApiModule);
    await app.listen(5002);
}
void bootstrap();
