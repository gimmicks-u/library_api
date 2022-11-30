import { IsMongoId } from 'class-validator';
import { BookIdInterface } from '../types/dto/bookIdInterface';

export class BookIdDTO implements BookIdInterface {
  @IsMongoId()
  public id: string;
}
