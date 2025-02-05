import dbConnect from "../src/lib/db";
import { Product } from "../src/models/Product";

const smartphones = [
  {
    name: "iPhone 16 Pro Max",
    category: "smartphones",
    price: 1299,
    image: "/iphone16.jpg",
    description: "Latest Apple flagship with A18 chip and 48MP camera",
    affiliateLinks: {
      amazon: "https://amzn.to/iphone16",
      walmart: "https://walmart.com/ip/iphone16",
    },
    features: ['6.7" Super Retina XDR', "5G", "ProMotion display"],
    rating: 4.9,
  },
  {
    name: "Samsung Galaxy S25 Ultra",
    category: "smartphones",
    price: 1399,
    image: "/s25ultra.jpg",
    description: "Powerful Android phone with 200MP camera",
    affiliateLinks: {
      amazon: "https://amzn.to/s25ultra",
      walmart: "https://walmart.com/ip/s25ultra",
    },
    features: ['6.8" Dynamic AMOLED', "S Pen included", "10x optical zoom"],
    rating: 4.8,
  },
  // Adicione mais 8 smartphones seguindo o mesmo formato
];

async function seed() {
  await dbConnect();
  await Product.deleteMany({});
  await Product.insertMany(smartphones);
  console.log("Database seeded!");
  process.exit();
}

seed();
