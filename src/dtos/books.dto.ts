import { BooksInterface } from '../types/dto/booksInterface';
import { booksValidConst } from '../config/validConst';
import { IsInt, IsISBN, IsMongoId, IsNotEmpty, IsOptional, Length, Max } from 'class-validator';

export class BooksDTO implements BooksInterface {
  @IsOptional()
  @IsMongoId()
  public id: string;

  @IsNotEmpty()
  @Length(1, booksValidConst.NAME_MAX)
  public name: string;

  @IsNotEmpty()
  @Length(1, booksValidConst.AUTHOR_MAX)
  public author: string;

  @IsNotEmpty()
  @Length(1, booksValidConst.COUNTRY_MAX)
  public country: string;

  @IsNotEmpty()
  @Length(1, booksValidConst.GENDER_MAX)
  public gender: string;

  @IsNotEmpty()
  @IsInt()
  @Max(booksValidConst.YEAR_MAX)
  public year: number;

  @IsISBN()
  public ISBN: string;

  @IsNotEmpty()
  @Max(booksValidConst.PRICE_MAX)
  public price: number | string;

  @IsOptional()
  public update_date: string;
}
