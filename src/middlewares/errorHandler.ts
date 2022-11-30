import type { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  res.status(err.httpCode ?? 400).json({ result: 'error', reason: err.message });
};

export { errorHandler };
