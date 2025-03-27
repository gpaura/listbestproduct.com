import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/config/auth";
import ProductGrid from "@/components/lists/ProductGrid";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="hero bg-base-200 rounded-lg mb-12">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Best Products of 2025</h1>
            <p className="text-xl mb-8">
              Curated expert picks with verified purchase links
            </p>
            {!session && (
              <Link href="/auth/sign-in" className="btn btn-primary btn-lg">
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["smartphones", "laptops", "home", "gaming"].map((category) => (
            <Link
              key={category}
              href={`/lists/electronics/${category}`}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="card-body">
                <h3 className="card-title capitalize">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <ProductGrid category="featured" />
    </div>
  );
}
