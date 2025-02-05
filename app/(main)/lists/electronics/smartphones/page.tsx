import { Product } from "@/models/Product";
import dbConnect from "@/lib/db";
import Image from "next/image";
import { ProductType } from "@/types/index";

async function getSmartphones() {
  await dbConnect();
  return await Product.find({ category: "smartphones" }).limit(10);
}

export async function generateMetadata() {
  return {
    title: "Best Smartphones to Buy in 2025 - ListBestProduct",
    description:
      "Expert-curated list of top 10 smartphones for 2025 with direct purchase links",
    openGraph: {
      images: ["/og-smartphones.jpg"],
    },
  };
}

export default async function SmartphonesPage() {
  const smartphones = (await getSmartphones()).map(
    (doc) => doc.toObject() as ProductType,
  );

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Top 10 Smartphones for 2025</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {smartphones.map((phone: ProductType, index: number) => (
          <div key={phone._id} className="card bg-base-100 shadow-xl">
            <figure className="px-4 pt-4">
              <Image
                src={phone.image}
                alt={phone.name}
                width={300}
                height={300}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                #{index + 1} {phone.name}
                {index < 3 && (
                  <div className="badge badge-primary">Best Seller</div>
                )}
              </h2>
              <p>{phone.description}</p>
              <div className="text-lg font-bold mb-4">${phone.price}</div>

              <div className="card-actions justify-between">
                <a
                  href={phone.affiliateLinks.amazon}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy on Amazon
                </a>
                <a
                  href={phone.affiliateLinks.walmart}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy on Walmart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
