import {Module} from '@nestjs/common';
import {DataApiController} from './data-api.controller';
import {DataApiService} from './data-api.service';

@Module({
    imports: [],
    controllers: [DataApiController],
    providers: [DataApiService],
    exports: [DataApiModule],
})
export class DataApiModule {}
