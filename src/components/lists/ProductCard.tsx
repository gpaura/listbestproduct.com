"use client";
import Image from "next/image";
import { ProductDocument } from "@/types";

export default function ProductCard({ product }: { product: ProductDocument }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
      <figure className="px-4 pt-4">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-xl h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-start justify-between">
          <h2 className="card-title">{product.name}</h2>
          {product.rating && (
            <div className="badge badge-primary gap-2">
              ⭐ {product.rating.toFixed(1)}
            </div>
          )}
        </div>
        <p className="text-gray-600 line-clamp-3">{product.description}</p>
        <div className="card-actions justify-end items-center mt-4">
          <div className="text-xl font-bold">${product.price}</div>
          <div className="flex gap-2">
            <a
              href={product.affiliateLinks.amazon}
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              Amazon
            </a>
            {product.affiliateLinks.walmart && (
              <a
                href={product.affiliateLinks.walmart}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener"
              >
                Walmart
              </a>
            )}
          </div>
        </div>
        {product.features && (
          <div className="mt-4">
            <div className="text-sm font-semibold mb-2">Key Features:</div>
            <ul className="flex flex-wrap gap-2">
              {product.features.map((feature) => (
                <li key={feature} className="badge badge-outline">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
