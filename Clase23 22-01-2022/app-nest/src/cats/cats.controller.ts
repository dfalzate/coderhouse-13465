import { Controller, Post, Body, Get } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';
import { createCatDTO } from '../dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Post()
  async create(@Body() cat: createCatDTO) {
    const response = await this.catService.create(cat);
    console.log(response);
    return response;
  }

  @Get()
  async findAll() {
    return await this.catService.findAll();
  }
}
