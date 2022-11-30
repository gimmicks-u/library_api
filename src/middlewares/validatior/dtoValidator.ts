import { plainToInstance } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { validatorType } from '../../types/validatorType';

export const DtoValidatorMiddleware = (DTOClass: any, type: validatorType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToInstance(DTOClass, req[type]);
    validateOrReject(dto)
      .then(() => {
        req[type] = dto;
        next();
      })
      .catch((errors: ValidationError[]) => {
        const errorsMessages: string[] = errors.reduce((acc: any, cur: any) => {
          return [...acc, ...Object.values(cur.constraints)];
        }, []);
        return res.status(400).json({
          name: 'ValidationErrorException',
          message: errorsMessages,
        });
      });
  };
};
