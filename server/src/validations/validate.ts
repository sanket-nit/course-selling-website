import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError, ZodErrorMap } from "zod";
import { INTERNAL_SERVER_ERROR } from "../constants/error-messages";

export const validate = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.parseAsync({
      body: req.body,
    });
    return next();
  } catch (error: any) {
    if (error instanceof ZodError) {
      const errors = error.issues;
      const formattedErrors = errors.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));
      return res.status(400).json(formattedErrors);
    } else {
      return res.status(500).send({
        message: INTERNAL_SERVER_ERROR,
      });
    }
  }
};
