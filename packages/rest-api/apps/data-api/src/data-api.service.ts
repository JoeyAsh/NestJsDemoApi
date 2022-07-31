import { Injectable } from '@nestjs/common';

@Injectable()
export class DataApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
