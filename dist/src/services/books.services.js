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
exports.BooksService = void 0;
var typedi_1 = require('typedi');
var BooksService = (function () {
  function BooksService() {
    console.log('서비스 생성자');
  }
  BooksService.prototype.readAllBooks = function () {
    console.log('서비스 진입');
  };
  BooksService = __decorate(
    [(0, typedi_1.Service)(), __metadata('design:paramtypes', [])],
    BooksService,
  );
  return BooksService;
})();
exports.BooksService = BooksService;
