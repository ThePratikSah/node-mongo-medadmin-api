import { NextFunction, Request, Response } from "express";
import {
  AuthRequestBody,
  parseAuthBodyPayload,
} from "../validators/auth.validation";
import { IPayload, verifyAuthToken } from "../helpers/token";
import { Types } from "mongoose";

export interface ExtendedRequest extends Request {
  _id?: Types.ObjectId;
  name?: string | null;
  email?: string;
  phoneNumber?: string | null;
  role?: "admin" | "user" | "manager";
}

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

export async function checkAuth(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) {
  if (!req.headers.authorization) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  const token = req.headers.authorization.split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Token not found" });
  }

  const decodedData = verifyAuthToken(token) as IPayload;

  if (!decodedData) {
    return res.status(401).json({ msg: "Invalid token" });
  }

  req._id = decodedData._id;
  req.name = decodedData.name || null;
  req.email = decodedData.email;
  req.phoneNumber = decodedData.phoneNumber || null;
  req.role = decodedData.role;

  return next();
}

export function restrictTo(roles: string[]) {
  return (req: ExtendedRequest, res: Response, next: NextFunction) => {
    if (!roles.includes(req.role!)) {
      return res.status(403).json({ msg: "Forbidden" });
    }
    return next();
  };
}
