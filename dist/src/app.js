'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.server = void 0;
require('reflect-metadata');
var express = require('express');
var errorHandler_1 = require('./middlewares/errorHandler');
var morgan = require('morgan');
var env_1 = require('./config/env');
var books_router_1 = require('./routers/books.router');
var Server = (function () {
  function Server() {
    var app = express();
    this.app = app;
  }
  Server.prototype.setRouter = function () {
    this.app.use('/api/book', books_router_1.booksRouter);
  };
  Server.prototype.setMiddleware = function () {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan(env_1.default.nodeEnv === 'dev' ? 'dev' : 'combined'));
  };
  Server.prototype.setErrorHandler = function () {
    this.app.use(errorHandler_1.errorHandler);
  };
  Server.prototype.listen = function () {
    this.setMiddleware();
    this.setRouter();
    this.setErrorHandler();
    this.app.listen(env_1.default.port, function () {
      console.log(
        '\u2705 Server is on : '.concat(env_1.default.url, ':').concat(env_1.default.port),
      );
    });
  };
  return Server;
})();
var server = new Server();
exports.server = server;
