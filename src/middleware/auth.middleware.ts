import { NextFunction, Request, Response } from "express";
import {
  AuthRequestBody,
  parseAuthBodyPayload,
} from "../validators/auth.validation";

export async function checkAuthData(
  req: Request<object, object, AuthRequestBody>,
  res: Response,
  next: NextFunction
) {
  const result = parseAuthBodyPayload(req.body);

  if (!result.success) {
    return res.status(400).json({ msg: "Invalid data", errors: result.issues });
  }
  return next();
}
