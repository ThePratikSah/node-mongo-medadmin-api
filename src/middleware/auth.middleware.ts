import { NextFunction, Request, Response } from "express";

export interface RequestBody {
  email: string;
  password: string;
}

export async function checkAuthData(
  req: Request<{}, {}, RequestBody>,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required" });
  }
  return next();
}
