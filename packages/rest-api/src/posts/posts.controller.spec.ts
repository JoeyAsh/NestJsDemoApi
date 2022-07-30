import {Test, TestingModule} from '@nestjs/testing';
import {PostsController} from './posts.controller';
import {PostsService} from './posts.service';
import {postArrayMock, postMock} from './posts.mock';
import {PostModel} from './entities/post.entity';

describe('PostsController', () => {
    let controller: PostsController;
    let service: PostsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PostsController],
            providers: [PostsService],
        }).compile();

        controller = module.get<PostsController>(PostsController);
        service = module.get<PostsService>(PostsService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('GET /posts', () => {
        it('should return an empty array', () => {
            expect(controller.getAll()).toStrictEqual([]);
        });

        it('should return an array with posts', () => {
            const result: Array<PostModel> = postArrayMock;
            jest.spyOn(service, 'findAll').mockImplementation(() => result);

            expect(controller.getAll()).toBe(result);
        });
    });

    describe('GET /posts/:id', () => {
        it('should throw NotFoundException', () => {
            expect(() => controller.get(1)).toThrowError();
        });

        it('should return a post', () => {
            const result: PostModel = postMock;
            jest.spyOn(service, 'findOne').mockImplementation(() => result);
            expect(controller.get(1)).toBe(result);
        });
    });
});
