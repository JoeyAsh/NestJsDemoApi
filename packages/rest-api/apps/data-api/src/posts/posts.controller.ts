import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
    Put,
} from '@nestjs/common';
import {PostsService} from './posts.service';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {PostEntity} from './entities/post.entity';
import {CreatePostDto} from './dto/create-post.dto';
import {UpdatePostDto} from './dto/update-post.dto';
import {postMock} from './posts.mock';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    public async create(@Body() post: CreatePostDto): Promise<PostEntity> {
        return this.postsService.create(post);
    }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: PostEntity,
    })
    public async getAll(): Promise<Array<PostEntity>> {
        return this.postsService.findAll();
    }

    @Get(':id')
    public async get(
        @Param('id', new ParseUUIDPipe()) id: string,
    ): Promise<PostEntity> {
        return this.postsService.findOne(id);
    }

    @Put(':id')
    public async update(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() post: UpdatePostDto,
    ): Promise<PostEntity> {
        return this.postsService.update(id, post);
    }

    @Delete(':id')
    public async delete(
        @Param('id', new ParseUUIDPipe()) id: string,
    ): Promise<void> {
        return this.postsService.delete(id);
    }

    @Post('/mock')
    public async createMockPost(): Promise<PostEntity> {
        return this.postsService.create(postMock);
    }
}
