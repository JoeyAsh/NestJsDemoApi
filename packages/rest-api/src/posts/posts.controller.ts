import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import {PostsService} from './posts.service';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {PostModel} from './entities/post.entity';
import {CreatePostDto} from './dto/create-post.dto';
import {UpdatePostDto} from './dto/update-post.dto';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: PostModel,
    })
    public getAll(): Array<PostModel> {
        return this.postsService.findAll();
    }

    @Get(':id')
    public get(@Param('id', ParseIntPipe) id: number): PostModel {
        return this.postsService.findOne(id);
    }

    @Post()
    public create(@Body() post: CreatePostDto): PostModel {
        return this.postsService.create(post);
    }

    @Delete(':id')
    public delete(@Param('id', ParseIntPipe) id: number): void {
        this.postsService.delete(id);
    }

    @Put(':id')
    public update(
        @Param('id', ParseIntPipe) id: number,
        @Body() post: UpdatePostDto,
    ): PostModel {
        return this.postsService.update(id, post);
    }
}
