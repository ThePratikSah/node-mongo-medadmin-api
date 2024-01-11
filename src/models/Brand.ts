import { Document } from "mongodb";
import { Schema, model } from "mongoose";

export interface Brand extends Document {
  name: string;
  logo?: string;
  website?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const BrandSchema = new Schema<Brand>(
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

const Brand = model<Brand>("Brand", BrandSchema);
