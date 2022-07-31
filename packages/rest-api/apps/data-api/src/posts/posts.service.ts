import {Injectable, Logger, NotFoundException} from '@nestjs/common';
import {PostEntity} from './entities/post.entity';
import {CreatePostDto} from './dto/create-post.dto';
import {UpdatePostDto} from './dto/update-post.dto';
import * as crypto from 'crypto';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class PostsService {
    private readonly logger: Logger = new Logger(PostsService.name);

    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>,
    ) {}

    public findAll(): Promise<Array<PostEntity>> {
        this.logger.log('Returning all posts.');
        return this.postRepository.find();
    }

    public async findOne(id: string): Promise<PostEntity> {
        this.logger.log(`Returning post with id: ${id}`);
        const post = await this.postRepository.findOneBy({id});

        if (!post) {
            throw new NotFoundException('Post not found.');
        }

        return post;
    }

    public async create(post: CreatePostDto): Promise<PostEntity> {
        this.logger.log('Creating new post.');

        const id: string = crypto.randomUUID().toString();

        const newPost: PostEntity = {
            ...post,
            createdOn: new Date(Date.now()),
            likes: 0,
            shares: 0,
            views: 0,
            id,
        };

        await this.postRepository.save(newPost);

        return newPost;
    }

    public async delete(id: string): Promise<void> {
        this.logger.log(`Deleting post with id: ${id}`);

        const post = await this.postRepository.findOneBy({id});

        if (!post) {
            throw new NotFoundException('Post not found.');
        }

        await this.postRepository.delete(id);
    }

    public async update(id: string, post: UpdatePostDto): Promise<PostEntity> {
        this.logger.log(`Updating post with id: ${id}`);

        let updatedPost = await this.postRepository.findOneBy({id});

        if (!updatedPost) {
            throw new NotFoundException('Post not found.');
        }

        updatedPost = {
            ...updatedPost,
            ...post,
            updatedOn: new Date(Date.now()),
            id,
        };

        await this.postRepository.update(id, updatedPost);
        return updatedPost;
    }
}
