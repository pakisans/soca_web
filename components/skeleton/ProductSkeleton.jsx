const ProductSkeleton = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md animate-pulse">
      <div className="h-20 bg-gray-300 rounded mb-4"></div>
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-6 bg-gray-300 rounded"></div>
    </div>
  );
};

export const ProductsSkeletonList = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
};
