import { Schema, model } from "mongoose";
import { Document } from "mongoose";

const productSchema = new Schema<ProductDocument>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  affiliateLinks: {
    amazon: { type: String, required: true },
    walmart: { type: String },
  },
  features: [{ type: String }],
  rating: { type: Number, min: 0, max: 5 },
});

export const Product = model<ProductDocument>("Product", productSchema);

export type ProductDocument = {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  affiliateLinks: {
    amazon: string;
    walmart?: string;
  };
  features?: string[];
  rating?: number;
} & Document;
