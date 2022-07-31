import {Module} from '@nestjs/common';
import {PostsModule} from './posts/posts.module';
import {CommentsModule} from './comments/comments.module';
import {AppModule} from '../../../src/app.module';

@Module({
    imports: [AppModule, PostsModule, CommentsModule],
})
export class DataApiModule {}
