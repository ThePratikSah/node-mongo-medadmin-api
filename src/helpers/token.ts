import jwt from "jsonwebtoken";
import { c } from "../constants";
import { Types } from "mongoose";

export interface IPayload {
  role: "admin" | "user" | "manager";
  phoneNumber?: string;
  name?: string;
  email?: string;
  _id?: Types.ObjectId;
}

export function generateToken(payload: IPayload) {
  return jwt.sign(payload, c.JWT_SECRET, { expiresIn: "30d" });
}

export function verifyAuthToken(token: string) {
  return jwt.verify(token, c.JWT_SECRET);
}
