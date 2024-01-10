import { Document } from "mongodb";
import { Schema, Types, ObjectId, model } from "mongoose";

export interface IOrder extends Document {
  user: ObjectId;
  items: {
    product: Types.ObjectId;
    quantity: number;
    unit_price: number;
  }[];
  total: number;
  date: Date;
  status: string;
  shipping_address: {
    address: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
  };
  payment_details?: {
    payment_method: string;
    payment_id: string;
  };
}

const orderSchema = new Schema<IOrder>({
  user: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      product: {
        type: Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      unit_price: {
        type: Number,
        required: true,
      },
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
    default: "pending",
  },
  shipping_address: {
    type: Object,
    required: true,
  },
  payment_details: {
    type: Object,
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Order = model<IOrder>("Order", orderSchema);