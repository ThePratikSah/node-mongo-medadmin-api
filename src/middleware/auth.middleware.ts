import { NextFunction, Request, Response } from "express";
import { string, email, minLength, object, safeParse, Input } from "valibot";

const AuthPayloadBodySchema = object({
  email: string("Your email must be a string.", [
    minLength(1, "Please enter your email."),
    email("The email address is badly formatted."),
  ]),
  password: string("Your password must be a string.", [
    minLength(8, "Your password must have 8 characters or more."),
  ]),
});

export type RequestBody = Input<typeof AuthPayloadBodySchema>;

export async function checkAuthData(
  req: Request<{}, {}, RequestBody>,
  res: Response,
  next: NextFunction
) {
  const result = safeParse(AuthPayloadBodySchema, req.body);

  if (!result.success) {
    return res.status(400).json({ msg: "Invalid data", errors: result.issues });
  }
  return next();
}
