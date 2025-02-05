import { mongoose } from "mongoose";

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      };
    }
  }
}

declare global {
  interface Window {
    gtag: (...args: (string | number | boolean | object)[]) => void;
  }

  interface CategoryType {
    name: string;
    slug: string;
    description: string;
  }

  interface ProductType {
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
}

export {};
