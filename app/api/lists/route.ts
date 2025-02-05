import { NextResponse } from "next/server";
import { Product } from "@/models/Product";
import dbConnect from "@/lib/db";

export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find().limit(50).lean();
    return NextResponse.json(products);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
