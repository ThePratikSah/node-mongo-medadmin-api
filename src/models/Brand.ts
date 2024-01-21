import { Document } from "mongodb";
import { Schema, model } from "mongoose";

export interface IBrand extends Document {
  name: string;
  logo?: string;
  website?: string;
  description?: string;
}

const BrandSchema = new Schema<IBrand>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    logo: {
      type: String,
    },
    website: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Brand = model<IBrand>("Brand", BrandSchema);

export const permissions = {
  create: ["admin", "manager"],
  read: ["admin", "manager", "user"],
  update: ["admin", "manager"],
  delete: ["admin", "manager"],
};

export const getAllBrands = () => Brand.find();
export const getBrandById = (id: string) => Brand.findById(id);
export const getBrandByName = (name: string) => Brand.findOne({ name });
export const createBrand = (brand: IBrand) => new Brand(brand).save();
export const updateBrand = (id: string, brand: IBrand) =>
  Brand.findByIdAndUpdate(id, brand);
export const deleteBrand = (id: string) => Brand.findByIdAndDelete(id);
