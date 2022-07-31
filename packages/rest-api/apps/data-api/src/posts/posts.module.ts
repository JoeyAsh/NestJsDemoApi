import {Module} from '@nestjs/common';
import {PostsService} from './posts.service';
import {PostsController} from './posts.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PostEntity} from './entities/post.entity';
import {UserEntity} from '../../../user-api/src/users/entities/user.entity';
import {UsersService} from '../../../user-api/src/users/users.service';

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity, UserEntity])],
    providers: [PostsService, UsersService],
    controllers: [PostsController],
})
export class PostsModule {}
