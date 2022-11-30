'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.plainNumberToUSD = void 0;
var plainNumberToUSD = function (price) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'usd',
  });
  return formatter.format(price);
};
exports.plainNumberToUSD = plainNumberToUSD;
