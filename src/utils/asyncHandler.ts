import { Request, Response, NextFunction } from 'express';
import { AsyncRequestHandler } from '../types/asyncReuestHandlerInterface';

const asyncHandler = (requestFn: AsyncRequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await requestFn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

export { asyncHandler };
