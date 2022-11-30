'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.errorHandler = void 0;
var errorHandler = function (err, req, res, next) {
  var _a;
  console.error(err);
  res
    .status((_a = err.httpCode) !== null && _a !== void 0 ? _a : 400)
    .json({ result: 'error', reason: err.message });
};
exports.errorHandler = errorHandler;
