import {Module} from '@nestjs/common';
import {AppModule} from '../../../src/app.module';
import {UsersModule} from './users/users.module';

@Module({
    imports: [AppModule, UsersModule],
})
export class UserApiModule {}
