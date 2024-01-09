import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  phoneNumber: string;
  name: string;
  email?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  phoneNumber: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String },
});

// 3. Create a Model.
const User = model<IUser>("User", userSchema);

export const getUserById = (id: string) => User.findById(id);
export const getUserByPhoneNumber = (phoneNumber: string) =>
  User.findOne({ phoneNumber });
export const createUser = (user: IUser): Promise<object> =>
  new User(user).save().then((user) => user.toObject());
