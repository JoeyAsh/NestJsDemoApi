import {
    Injectable,
    Logger,
    NotFoundException,
    UnprocessableEntityException,
} from '@nestjs/common';
import {PostModel} from './entities/post.entity';
import {CreatePostDto} from './dto/create-post.dto';
import {UpdatePostDto} from './dto/update-post.dto';

@Injectable()
export class PostsService {
    private posts: Array<PostModel> = [];
    private readonly logger: Logger = new Logger(PostsService.name);

    public findAll(): Array<PostModel> {
        this.logger.log('Returning all posts.');
        return this.posts;
    }

    public findOne(id: number): PostModel {
        this.logger.log(`Returning post with id: ${id}`);
        const post = this.posts.find((post) => post.id === id);

        if (!post) {
            throw new NotFoundException('Post not found.');
        }

        return post;
    }

    public create(post: CreatePostDto): PostModel {
        this.logger.log('Creating new post.');
        const titleExists: boolean = this.posts.some(
            (item) => item.title === post.title,
        );

        if (titleExists) {
            throw new UnprocessableEntityException(
                'Post title already exists.',
            );
        }

        const maxId: number = Math.max(...this.posts.map((post) => post.id), 0);
        const id: number = maxId + 1;

        const newPost: PostModel = {
            ...post,
            id,
        };

        this.posts.push(newPost);

        return newPost;
    }

    public delete(id: number): void {
        this.logger.log(`Deleting post with id: ${id}`);

        const index: number = this.posts.findIndex((post) => post.id === id);

        if (index === -1) {
            throw new NotFoundException('Post not found.');
        }

        this.posts.splice(index, 1);
    }

    public update(id: number, post: UpdatePostDto): PostModel {
        this.logger.log(`Updating post with id: ${id}`);

        const index = this.posts.findIndex((post) => post.id === id);

        if (index === -1) {
            throw new NotFoundException('Post not found.');
        }

        const titleExists: boolean = this.posts.some(
            (item) => item.title === post.title && item.id !== id,
        );
        if (titleExists) {
            throw new UnprocessableEntityException(
                'Post title already exists.',
            );
        }

        const newPost: PostModel = {
            ...post,
            id,
        };

        this.posts[index] = newPost;

        return newPost;
    }
}
