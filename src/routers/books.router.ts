import { Request, Response, Router } from 'express';
import { BooksController } from '../controllers/books.controller';
import { Container } from 'typedi';
import { asyncHandler } from '../utils/asyncHandler';
import { DtoValidatorMiddleware } from '../middlewares/validatior/dtoValidator';
import { BooksDTO } from '../dtos/books.dto';
import { BookIdDTO } from '../dtos/bookId.dto';

const booksRouter = Router();

const booksController = Container.get<BooksController>(BooksController);

booksRouter.get(
  '/:id',
  DtoValidatorMiddleware(BookIdDTO, 'params'),
  asyncHandler((req: Request, res: Response) => booksController.readBook(req, res)),
);

booksRouter.get(
  '/',
  asyncHandler((req: Request, res: Response) => booksController.readAllBooks(req, res)),
);

booksRouter.post(
  '/',
  DtoValidatorMiddleware(BooksDTO, 'body'),
  asyncHandler((req: Request, res: Response) => booksController.createBook(req, res)),
);

booksRouter.delete(
  '/:id',
  DtoValidatorMiddleware(BookIdDTO, 'params'),
  asyncHandler((req: Request, res: Response) => booksController.deleteBook(req, res)),
);

booksRouter.put(
  '/:id',
  DtoValidatorMiddleware(BookIdDTO, 'params'),
  DtoValidatorMiddleware(BooksDTO, 'body'),
  asyncHandler((req: Request, res: Response) => booksController.updateBook(req, res)),
);

export { booksRouter };
