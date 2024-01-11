import { Document } from "mongodb";
import { Schema, model } from "mongoose";

export interface Category extends Document {
  name: string;
  description?: string;
  image?: string;
  parentCategory?: string;
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

export const createCategory = (category: Category) =>
  new Category(category).save();
export const getAllCategories = () => Category.find();
export const getCategoryById = (id: string) => Category.findById(id);
export const deleteCategory = (id: string) => Category.findByIdAndDelete(id);
export const updateCategory = (id: string, category: Category) =>
  Category.findByIdAndUpdate(id, category);
