import { Service } from 'typedi';
import * as fs from 'fs';
import { BooksDTO } from '../dtos/books.dto';
import { dateToUSADate } from '../utils/dateFormatter';
import { BooksRepositoryInterface } from '../types/repository/booksRepositoryInterface';

@Service()
export class BooksRepository implements BooksRepositoryInterface {
  public filePath: string;

  constructor() {
    this.filePath = 'src/db/data/MOCK_BOOK_DATA.json';
  }

  public async findAll(): Promise<BooksDTO[]> {
    const foundBooks: string = await fs.promises.readFile(this.filePath, 'utf-8');
    return JSON.parse(foundBooks);
  }

  public async findById(id: string): Promise<BooksDTO[]> {
    const foundBooks: BooksDTO[] = await this.findAll();
    const filteredBook = foundBooks.filter((item) => item.id === id);
    return filteredBook;
  }

  public async findByISBN(ISBN: string): Promise<BooksDTO[]> {
    const foundBooks: BooksDTO[] = await this.findAll();
    const filteredBooks = foundBooks.filter((item) => item.ISBN === ISBN);
    return filteredBooks;
  }

  public async create(createBookDTO: BooksDTO): Promise<BooksDTO> {
    createBookDTO.update_date = dateToUSADate(new Date());

    const foundBooks: BooksDTO[] = await this.findAll();
    foundBooks.push(createBookDTO);
    await fs.promises.writeFile(this.filePath, JSON.stringify(foundBooks));
    const createdBook = foundBooks[foundBooks.length - 1];
    return createdBook;
  }

  public async deleteById(id: string): Promise<void> {
    const foundBooks: BooksDTO[] = await this.findAll();
    const BooksWithoutFoundById = foundBooks.filter((item) => item.id !== id);
    await fs.promises.writeFile(this.filePath, JSON.stringify(BooksWithoutFoundById));
  }

  public async update(updateBookDTO: BooksDTO): Promise<BooksDTO> {
    updateBookDTO.update_date = dateToUSADate(new Date());

    const foundBooks: BooksDTO[] = await this.findAll();
    const updatedBooks = foundBooks.map((item) => {
      return item.id === updateBookDTO.id ? updateBookDTO : item;
    });
    await fs.promises.writeFile(this.filePath, JSON.stringify(updatedBooks));

    return updateBookDTO;
  }
}
