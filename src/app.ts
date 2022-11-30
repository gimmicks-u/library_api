import 'reflect-metadata';
import * as express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import * as morgan from 'morgan';
import env from './config/env';
import { booksRouter } from './routers/books.router';

class Server {
  private readonly app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRouter() {
    this.app.use('/api/book', booksRouter);
  }

  private setMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan(env.nodeEnv === 'dev' ? 'dev' : 'combined'));
  }

  private setErrorHandler() {
    this.app.use(errorHandler);
  }

  public listen() {
    this.setMiddleware();
    this.setRouter();
    this.setErrorHandler();

    this.app.listen(env.port, () => {
      console.log(`✅ Server is on : ${env.url}:${env.port}`);
    });
  }
}

const server = new Server();

export { server };
