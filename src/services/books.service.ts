import { BooksRepository } from '../repositories/books.repository';
import { Service } from 'typedi';
import { BooksDTO } from '../dtos/books.dto';
import { AppError } from '../utils/AppError';
import { errorMsg } from '../utils/errorMessage';

@Service()
export class BooksService {
  constructor(private readonly booksRepository: BooksRepository) {}

  public async readAllBooks(): Promise<BooksDTO[]> {
    const foundBooks: BooksDTO[] = await this.booksRepository.findAll();
    return foundBooks;
  }

  public async readBook(id: string): Promise<BooksDTO> {
    const foundBook: BooksDTO[] = await this.booksRepository.findById(id);
    if (foundBook.length === 0) {
      throw new AppError(404, errorMsg.NOT_FOUND_BOOK);
    }
    return foundBook[0];
  }

  public async createBook(createBookDTO: BooksDTO): Promise<BooksDTO> {
    const foundBookByISBN = await this.booksRepository.findByISBN(createBookDTO.ISBN);
    if (foundBookByISBN.length !== 0) {
      throw new AppError(409, errorMsg.ALREADY_EXIST_BOOK);
    }

    const createdBook: BooksDTO = await this.booksRepository.create(createBookDTO);
    return createdBook;
  }

  public async deleteBook(id: string): Promise<void> {
    const hasBook = await this.hasBookById(id);
    if (!hasBook) {
      throw new AppError(404, errorMsg.NOT_FOUND_BOOK);
    }
    await this.booksRepository.deleteById(id);
  }

  public async hasBookById(id: string): Promise<boolean> {
    const foundBook = await this.booksRepository.findById(id);
    return foundBook.length === 0 ? false : true;
  }

  public async updateBook(updateBookDTO: BooksDTO): Promise<BooksDTO> {
    const hasBook = await this.hasBookById(updateBookDTO.id);
    if (!hasBook) {
      throw new AppError(404, errorMsg.NOT_FOUND_BOOK); // 404?
    }

    const updatedBook: BooksDTO = await this.booksRepository.update(updateBookDTO);
    return updatedBook;
  }
}
