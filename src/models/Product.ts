import { Schema, Types, model } from "mongoose";

export interface IProduct {
  _id?: Types.ObjectId;
  name: string;
  description: string;
  price: number;
  selling_price: number;
  quantity?: number;
  prescription_required: boolean;
  expiry_date: Date;
  manufacturer: string;
  category: string;
  images: string[];
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  selling_price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
    default: 0,
  },
  prescription_required: {
    type: Boolean,
    required: true,
  },
  expiry_date: {
    type: Date,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Product = model<IProduct>("Product", productSchema);
