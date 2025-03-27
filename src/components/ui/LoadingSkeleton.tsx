export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="card bg-base-100 shadow-xl">
          <div className="skeleton h-48 w-full rounded-t-xl"></div>
          <div className="card-body space-y-4">
            <div className="skeleton h-6 w-3/4"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-2/3"></div>
            <div className="flex gap-4">
              <div className="skeleton h-10 w-24"></div>
              <div className="skeleton h-10 w-24"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
