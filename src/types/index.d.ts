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
    bestbuy?: string;
  };
  features: string[];
  rating: number;
  lastUpdated: Date;
}

export interface CategoryType {
  name: string;
  slug: string;
  description: string;
}

export type ProductDocument = ProductType & Document;
