import { ApiProperty } from '@nestjs/swagger';
export class createCatDTO {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly age: number;

  @ApiProperty()
  readonly breed: string;
}
