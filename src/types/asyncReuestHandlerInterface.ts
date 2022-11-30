import { Request, Response, NextFunction } from 'express';

export interface AsyncRequestHandler {
  (req: Request, res: Response, next: NextFunction): void;
}
