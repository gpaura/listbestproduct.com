import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="hero min-h-screen bg-gradient-to-b from-primary to-secondary">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-white mb-8">
              Discover the Best Products of 2025
            </h1>

            <p className="text-xl text-white mb-12">
              Our AI-powered engine analyzes thousands of reviews and prices to
              bring you the top-rated products with direct buying links from
              trusted retailers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-primary">
                    🤖 AI-Powered Analysis
                  </h2>
                  <p>
                    Real-time product comparisons using advanced machine
                    learning
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-secondary">
                    ⚡ Instant Links
                  </h2>
                  <p>
                    Direct affiliate links to Amazon, Walmart, and major
                    retailers
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-accent">📈 Daily Updates</h2>
                  <p>
                    Always up-to-date with the latest prices and availability
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/lists/electronics/smartphones"
                className="btn btn-lg btn-success"
              >
                View Top Smartphones →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
