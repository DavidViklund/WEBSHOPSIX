import React from "react";
import Button from "./buttons/Button";

const ProductCard = ({ paginatedProducts, isLoading, error }) => {
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="card grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
      {paginatedProducts.map((product) => (
        <div
          key={product.id}
          className="flex flex-col gap-3 border border-greyscale-border-darker bg-greyscale-surface-subtle p-4 rounded-xl"
        >
          <div className="flex justify-center items-center h-[400px] bg-white rounded-lg border border-greyscale-border-default">
            <img
              className="max-h-full object-cover rounded-lg"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="flex flex-col justify-between flex-grow gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex w-auto">
                <p className="capitalize font-medium text-sm py-1 px-2 border border-greyscale-border-default rounded-full whitespace-nowrap">
                  {product.category}
                </p>
              </div>
              <p className="font-bold text-lg">{product.title}</p>
            </div>
            <div className="flex justify-between items-center">
              <Button text="See more" to={`/product/${product.id}`} />
              <p className="font-semibold">{product.price}$</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
