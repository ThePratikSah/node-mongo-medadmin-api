import { Document } from "mongodb";
import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IUser extends Document {
  email: string;
  password: string;
  role?: "user" | "manager" | "admin";
  verified?: boolean;
  phoneNumber?: string;
  name?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>(
  {
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
    role: {
      type: String,
      default: "user",
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// 3. Create a Model.
const User = model<IUser>("User", userSchema);

export const getUserById = (id: string) => User.findById(id);
export const getUserByPhoneNumber = (phoneNumber: string) =>
  User.findOne({ phoneNumber });
export const getUserByEmail = (email: string) => User.findOne({ email });
export const createUser = (user: IUser): Promise<object> =>
  new User(user).save();
export const updateUser = (id: string, user: IUser) =>
  User.findByIdAndUpdate(id, user);
export const deleteUser = (id: string) => User.findByIdAndDelete(id);
