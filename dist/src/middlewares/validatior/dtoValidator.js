'use strict';
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.DtoValidatorMiddleware = void 0;
var class_transformer_1 = require('class-transformer');
var class_validator_1 = require('class-validator');
var DtoValidatorMiddleware = function (DTOClass, type) {
  return function (req, res, next) {
    var dto = (0, class_transformer_1.plainToInstance)(DTOClass, req[type]);
    (0, class_validator_1.validateOrReject)(dto)
      .then(function () {
        req[type] = dto;
        next();
      })
      .catch(function (errors) {
        var errorsMessages = errors.reduce(function (acc, cur) {
          return __spreadArray(__spreadArray([], acc, true), Object.values(cur.constraints), true);
        }, []);
        return res.status(400).json({
          name: 'ValidationErrorException',
          message: errorsMessages,
        });
      });
  };
};
exports.DtoValidatorMiddleware = DtoValidatorMiddleware;
