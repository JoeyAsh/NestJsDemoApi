import {dataApiBootstrap} from '../apps/data-api/src/main';
import {userApiBootstrap} from '../apps/user-api/src/main';

async function bootstrap() {
    await dataApiBootstrap();
    await userApiBootstrap();
}
void bootstrap();
