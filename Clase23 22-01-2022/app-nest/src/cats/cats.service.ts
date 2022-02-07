import { Injectable } from '@nestjs/common';
import { Cats } from '../interfaces/cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cats[] = [
    {
      name: 'name1',
      age: 2,
      breed: 'breed1',
    },
  ];

  create(cat: Cats): Cats {
    this.cats.push(cat);
    return cat;
  }

  findAll(): Cats[] {
    return this.cats;
  }
}
