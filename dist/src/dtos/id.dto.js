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
Object.defineProperty(exports, '__esModule', { value: true });
exports.BooksDTO = void 0;
var validConst_1 = require('../config/validConst');
var class_validator_1 = require('class-validator');
var BooksDTO = (function () {
  function BooksDTO() {}
  __decorate(
    [
      (0, class_validator_1.IsOptional)(),
      (0, class_validator_1.IsMongoId)(),
      __metadata('design:type', String),
    ],
    BooksDTO.prototype,
    'id',
    void 0,
  );
  __decorate(
    [
      (0, class_validator_1.IsNotEmpty)(),
      (0, class_validator_1.Length)(1, validConst_1.booksValidConst.NAME_MAX),
      __metadata('design:type', String),
    ],
    BooksDTO.prototype,
    'name',
    void 0,
  );
  __decorate(
    [
      (0, class_validator_1.IsNotEmpty)(),
      (0, class_validator_1.Length)(1, validConst_1.booksValidConst.AUTHOR_MAX),
      __metadata('design:type', String),
    ],
    BooksDTO.prototype,
    'author',
    void 0,
  );
  __decorate(
    [
      (0, class_validator_1.IsNotEmpty)(),
      (0, class_validator_1.Length)(1, validConst_1.booksValidConst.COUNTRY_MAX),
      __metadata('design:type', String),
    ],
    BooksDTO.prototype,
    'country',
    void 0,
  );
  __decorate(
    [
      (0, class_validator_1.IsNotEmpty)(),
      (0, class_validator_1.Length)(1, validConst_1.booksValidConst.GENDER_MAX),
      __metadata('design:type', String),
    ],
    BooksDTO.prototype,
    'gender',
    void 0,
  );
  __decorate(
    [
      (0, class_validator_1.IsNotEmpty)(),
      (0, class_validator_1.IsInt)(),
      (0, class_validator_1.Max)(validConst_1.booksValidConst.YEAR_MAX),
      __metadata('design:type', Number),
    ],
    BooksDTO.prototype,
    'year',
    void 0,
  );
  __decorate(
    [(0, class_validator_1.IsISBN)(), __metadata('design:type', String)],
    BooksDTO.prototype,
    'ISBN',
    void 0,
  );
  __decorate(
    [
      (0, class_validator_1.IsNotEmpty)(),
      (0, class_validator_1.IsInt)(),
      (0, class_validator_1.Max)(validConst_1.booksValidConst.PRICE_MAX),
      __metadata('design:type', Object),
    ],
    BooksDTO.prototype,
    'price',
    void 0,
  );
  __decorate(
    [(0, class_validator_1.IsNotEmpty)(), __metadata('design:type', String)],
    BooksDTO.prototype,
    'update_date',
    void 0,
  );
  return BooksDTO;
})();
exports.BooksDTO = BooksDTO;
