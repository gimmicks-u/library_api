import { Request, Response } from 'express';
import { Service } from 'typedi';
import { BooksService } from '../services/books.service';
import { plainNumberToUSD } from '../utils/priceFormatter';
import ObjectID from 'bson-objectid';
import { BooksDTO } from '../dtos/books.dto';

@Service()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  public async readAllBooks(req: Request, res: Response): Promise<void> {
    const foundBooks: BooksDTO[] = await this.booksService.readAllBooks();
    res.status(200).json(foundBooks);
  }

  public async readBook(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const foundBook: BooksDTO = await this.booksService.readBook(id);
    res.status(200).json(foundBook);
  }

  public async createBook(req: Request, res: Response): Promise<void> {
    const createBookDTO: BooksDTO = {
      id: ObjectID().toHexString(),
      ...req.body,
    };
    createBookDTO.price = plainNumberToUSD(createBookDTO.price as number);

    const createdBook: BooksDTO = await this.booksService.createBook(createBookDTO);
    res.status(201).json(createdBook);
  }

  public async deleteBook(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await this.booksService.deleteBook(id);
    res.status(204).end();
  }

  public async updateBook(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const updateBookDTO: BooksDTO = {
      ...req.body,
      id,
    };
    updateBookDTO.price = plainNumberToUSD(updateBookDTO.price as number);

    const updatedBook: BooksDTO = await this.booksService.updateBook(updateBookDTO);
    res.status(201).json(updatedBook);
  }
}
