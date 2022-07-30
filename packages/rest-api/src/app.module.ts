import {Module} from '@nestjs/common';
import {PostsModule} from './posts/posts.module';
import {ConfigModule} from '@nestjs/config';
import { CommentsModule } from './comments/comments.module';

@Module({
    imports: [PostsModule, ConfigModule.forRoot(), CommentsModule],
})
export class AppModule {}
