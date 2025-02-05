import { Document } from "mongoose";

export interface ProductType {
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
  features: string[];
  rating: number;
}

export type ProductDocument = ProductType & Document;
