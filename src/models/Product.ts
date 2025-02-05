import { Schema, model } from "mongoose";
import { ProductDocument } from "@/types";

const productSchema = new Schema<ProductDocument>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  affiliateLinks: {
    amazon: { type: String, required: true },
    walmart: { type: String },
    bestbuy: { type: String },
  },
  features: [{ type: String }],
  rating: { type: Number, min: 0, max: 5 },
  lastUpdated: { type: Date, default: Date.now },
});

export const Product = model<ProductDocument>("Product", productSchema);
