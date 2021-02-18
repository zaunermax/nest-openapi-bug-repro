import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';

type Nullable<T> = T | null;

class NestedDTO {
  @ApiProperty()
  prop: string;
}

class RecordDTO {
  @ApiProperty()
  prop: string;

  @ApiProperty({ type: NestedDTO, nullable: true })
  nested: Nullable<NestedDTO>;
}

class TestDTO {
  @ApiProperty({ type: RecordDTO, isArray: true })
  records: RecordDTO[];
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ type: TestDTO })
  getHello(): string {
    return this.appService.getHello();
  }
}
