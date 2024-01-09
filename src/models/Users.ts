import { Schema, Types, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  email: string;
  password: string;
  phoneNumber?: string;
  name?: string;
  _id?: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  phoneNumber: { type: String },
  name: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

// 3. Create a Model.
const User = model<IUser>("User", userSchema);

export const getUserById = (id: string) => User.findById(id);
export const getUserByPhoneNumber = (phoneNumber: string) =>
  User.findOne({ phoneNumber });
export const getUserByEmail = (email: string) => User.findOne({ email });
export const createUser = (user: IUser): Promise<object> =>
  new User(user).save().then((user) => user.toObject());
