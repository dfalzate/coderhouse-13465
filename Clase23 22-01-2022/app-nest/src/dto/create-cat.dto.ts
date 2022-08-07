import { ApiProperty } from '@nestjs/swagger';
export class createCatDTO {
  @ApiProperty() //swagger
  readonly name: string;

  @ApiProperty() //swagger
  readonly age: number;
 
  @ApiProperty() //swagger
  readonly breed: string;
}
