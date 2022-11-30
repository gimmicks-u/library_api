'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.booksRouter = void 0;
var express_1 = require('express');
var books_controller_1 = require('../controllers/books.controller');
var typedi_1 = require('typedi');
var asyncHandler_1 = require('../utils/asyncHandler');
var dtoValidator_1 = require('../middlewares/validatior/dtoValidator');
var books_dto_1 = require('../dtos/books.dto');
var bookId_dto_1 = require('../dtos/bookId.dto');
var booksRouter = (0, express_1.Router)();
exports.booksRouter = booksRouter;
var booksController = typedi_1.Container.get(books_controller_1.BooksController);
booksRouter.get(
  '/:id',
  (0, dtoValidator_1.DtoValidatorMiddleware)(bookId_dto_1.BookIdDTO, 'params'),
  (0, asyncHandler_1.asyncHandler)(function (req, res) {
    return booksController.readBook(req, res);
  }),
);
booksRouter.get(
  '/',
  (0, asyncHandler_1.asyncHandler)(function (req, res) {
    return booksController.readAllBooks(req, res);
  }),
);
booksRouter.post(
  '/',
  (0, dtoValidator_1.DtoValidatorMiddleware)(books_dto_1.BooksDTO, 'body'),
  (0, asyncHandler_1.asyncHandler)(function (req, res) {
    return booksController.createBook(req, res);
  }),
);
booksRouter.delete(
  '/:id',
  (0, dtoValidator_1.DtoValidatorMiddleware)(bookId_dto_1.BookIdDTO, 'params'),
  (0, asyncHandler_1.asyncHandler)(function (req, res) {
    return booksController.deleteBook(req, res);
  }),
);
booksRouter.put(
  '/:id',
  (0, dtoValidator_1.DtoValidatorMiddleware)(bookId_dto_1.BookIdDTO, 'params'),
  (0, dtoValidator_1.DtoValidatorMiddleware)(books_dto_1.BooksDTO, 'body'),
  (0, asyncHandler_1.asyncHandler)(function (req, res) {
    return booksController.updateBook(req, res);
  }),
);
