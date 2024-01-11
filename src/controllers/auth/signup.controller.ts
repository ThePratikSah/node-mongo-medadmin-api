import { Request, Response } from "express";
import { IUser, createUser, getUserByEmail } from "../../models/Users";
import { hashPassword } from "../../helpers/bcrypt";
import { RequestBody } from "../../middleware/auth.middleware";

export async function signupController(
  req: Request<object, object, RequestBody>,
  res: Response
) {
  const { email, password } = req.body;
  let user: IUser | null;

  try {
    user = await getUserByEmail(email);
  } catch (error) {
    return res.status(400).json({ msg: "Failed fetching user from database" });
  }

  if (user) {
    return res.status(401).json({ msg: "User already exists" });
  }

  const hash = hashPassword(password);

  try {
    await createUser({ email, password: hash });
  } catch (error) {
    return res.status(400).json({ msg: "Failed creating user in database" });
  }

  return res.status(200).json({ msg: "User created successfully" });
}
