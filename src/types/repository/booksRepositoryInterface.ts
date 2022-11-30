import { BooksDTO } from '../../dtos/books.dto';

export interface BooksRepositoryInterface {
  filePath: string;
  findAll(): Promise<BooksDTO[]>;
  findById(id: string): Promise<BooksDTO[]>;
  findByISBN(ISBN: string): Promise<BooksDTO[]>;
  create(createBookDTO: BooksDTO): Promise<BooksDTO>;
  deleteById(id: string): Promise<void>;
  update(updateBookDTO: BooksDTO): Promise<BooksDTO>;
}
