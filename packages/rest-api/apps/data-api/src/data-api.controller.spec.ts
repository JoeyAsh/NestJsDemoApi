import { Test, TestingModule } from '@nestjs/testing';
import { DataApiController } from './data-api.controller';
import { DataApiService } from './data-api.service';

describe('DataApiController', () => {
  let dataApiController: DataApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DataApiController],
      providers: [DataApiService],
    }).compile();

    dataApiController = app.get<DataApiController>(DataApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dataApiController.getHello()).toBe('Hello World!');
    });
  });
});
