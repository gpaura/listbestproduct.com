import { Metadata } from "next";

export const generateProductMetadata = (product: ProductType): Metadata => ({
  title: `${product.name} - Best Price & Reviews | ListBestProduct`,
  description: product.description,
  openGraph: {
    type: "website",
    title: product.name,
    description: product.description,
    images: [product.image],
    url: `https://listbestproduct.com/products/${product.category}/${product.name.toLowerCase().replace(/ /g, "-")}`,
    siteName: "ListBestProduct",
  },
  alternates: {
    canonical: `/products/${product.category}/${product.name.toLowerCase().replace(/ /g, "-")}`,
  },
});

export const generateCategoryMetadata = (category: CategoryType): Metadata => ({
  title: `Best ${category.name} of 2025 - Expert Rankings`,
  description: category.description,
  keywords: [
    `top ${category.name}`,
    `best ${category.name} 2025`,
    `${category.name} reviews`,
  ],
  openGraph: {
    type: "website",
    title: `Best ${category.name} of 2025`,
    description: category.description,
    siteName: "ListBestProduct",
  },
});
