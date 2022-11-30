'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.BooksService = void 0;
var books_repository_1 = require('../repositories/books.repository');
var typedi_1 = require('typedi');
var AppError_1 = require('../utils/AppError');
var errorMessage_1 = require('../utils/errorMessage');
var BooksService = (function () {
  function BooksService(booksRepository) {
    this.booksRepository = booksRepository;
  }
  BooksService.prototype.readAllBooks = function () {
    return __awaiter(this, void 0, void 0, function () {
      var foundBooks;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.booksRepository.findAll()];
          case 1:
            foundBooks = _a.sent();
            return [2, foundBooks];
        }
      });
    });
  };
  BooksService.prototype.readBook = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      var foundBook;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.booksRepository.findById(id)];
          case 1:
            foundBook = _a.sent();
            if (foundBook.length === 0) {
              throw new AppError_1.AppError(404, errorMessage_1.errorMsg.NOT_FOUND_BOOK);
            }
            return [2, foundBook[0]];
        }
      });
    });
  };
  BooksService.prototype.createBook = function (createBookDTO) {
    return __awaiter(this, void 0, void 0, function () {
      var foundBookByISBN, createdBook;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.booksRepository.findByISBN(createBookDTO.ISBN)];
          case 1:
            foundBookByISBN = _a.sent();
            if (foundBookByISBN.length !== 0) {
              throw new AppError_1.AppError(409, errorMessage_1.errorMsg.ALREADY_EXIST_BOOK);
            }
            return [4, this.booksRepository.create(createBookDTO)];
          case 2:
            createdBook = _a.sent();
            return [2, createdBook];
        }
      });
    });
  };
  BooksService.prototype.deleteBook = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      var hasBook;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.hasBookById(id)];
          case 1:
            hasBook = _a.sent();
            if (!hasBook) {
              throw new AppError_1.AppError(404, errorMessage_1.errorMsg.NOT_FOUND_BOOK);
            }
            return [4, this.booksRepository.deleteById(id)];
          case 2:
            _a.sent();
            return [2];
        }
      });
    });
  };
  BooksService.prototype.hasBookById = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      var foundBook;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.booksRepository.findById(id)];
          case 1:
            foundBook = _a.sent();
            return [2, foundBook.length === 0 ? false : true];
        }
      });
    });
  };
  BooksService.prototype.updateBook = function (updateBookDTO) {
    return __awaiter(this, void 0, void 0, function () {
      var hasBook, updatedBook;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.hasBookById(updateBookDTO.id)];
          case 1:
            hasBook = _a.sent();
            if (!hasBook) {
              throw new AppError_1.AppError(404, errorMessage_1.errorMsg.NOT_FOUND_BOOK);
            }
            return [4, this.booksRepository.update(updateBookDTO)];
          case 2:
            updatedBook = _a.sent();
            return [2, updatedBook];
        }
      });
    });
  };
  BooksService = __decorate(
    [
      (0, typedi_1.Service)(),
      __metadata('design:paramtypes', [books_repository_1.BooksRepository]),
    ],
    BooksService,
  );
  return BooksService;
})();
exports.BooksService = BooksService;
