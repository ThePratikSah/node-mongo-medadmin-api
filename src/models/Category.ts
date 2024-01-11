import { Document } from "mongodb";
import { Schema, model } from "mongoose";

export interface Category extends Document {
  name: string;
  description?: string;
  image?: string;
  parentCategory?: string;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new Schema<Category>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Category = model<Category>("Category", CategorySchema);
