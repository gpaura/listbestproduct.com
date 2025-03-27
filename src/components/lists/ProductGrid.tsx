import React from "react";

interface ProductGridProps {
  category: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ category }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">
        Product Grid - Category: {category}
      </h3>
      <p>
        This is a placeholder for the ProductGrid component. Products will be
        displayed here.
      </p>
    </div>
  );
};

export default ProductGrid;
