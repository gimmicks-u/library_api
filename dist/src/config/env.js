'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var dotenv = require('dotenv');
dotenv.config();
var env = {
  port: process.env.PORT,
  url: process.env.URL,
  nodeEnv: process.env.NODE_ENV,
};
exports.default = env;
