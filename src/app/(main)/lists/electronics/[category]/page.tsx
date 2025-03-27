import { Product } from "@/models/Product";
import dbConnect from "@/lib/db";
import ProductGrid from "@/components/lists/ProductGrid";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";
import { Suspense } from "react";

async function getProducts(category: string) {
  await dbConnect();
  return Product.find({ category }).sort({ rating: -1 }).lean();
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const products = await getProducts(params.category);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 capitalize">
        Best {params.category.replace("-", " ")} of 2025
      </h1>

      <Suspense fallback={<LoadingSkeleton />}>
        <ProductGrid products={products} />
      </Suspense>
    </div>
  );
}
