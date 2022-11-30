'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.dateToUSADate = void 0;
var dateToUSADate = function (date) {
  var formatter = new Intl.DateTimeFormat('en-US');
  return formatter.format(date);
};
exports.dateToUSADate = dateToUSADate;
