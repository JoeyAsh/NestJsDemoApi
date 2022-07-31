import { Controller, Get } from '@nestjs/common';
import { DataApiService } from './data-api.service';

@Controller()
export class DataApiController {
  constructor(private readonly dataApiService: DataApiService) {}

  @Get()
  getHello(): string {
    return this.dataApiService.getHello();
  }
}
