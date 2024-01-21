import { Document } from "mongodb";
import { Schema, model } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description?: string;
  image?: string;
}

const CategorySchema = new Schema<ICategory>(
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
      required: false,
    },
  },
  { timestamps: true }
);

const Category = model<ICategory>("Category", CategorySchema);

export const permissions = {
  create: ["admin", "manager"],
  read: ["admin", "manager", "user"],
  update: ["admin", "manager"],
  delete: ["admin", "manager"],
};

export const createCategory = (category: ICategory) =>
  new Category(category).save();
export const getAllCategories = () => Category.find();
export const getCategoryById = (id: string) => Category.findById(id);
export const deleteCategory = (id: string) => Category.findByIdAndDelete(id);
export const updateCategory = (id: string, category: ICategory) =>
  Category.findByIdAndUpdate(id, category);
