import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/dataFetching";
import Button from "../components/Button";

const SingleProductPage = ({ addToCart }) => {
  const { productId } = useParams();

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product</p>;

  return (
    <div className="max-w-[1440px] sm:px-4 md:px-8 lg:px-80">
      <div className="container mx-auto ">
        <div className="flex flex-col m-4 border border-greyscale-border-darker p-4 rounded-xl bg-greyscale-surface-subtle">
          <div className="flex items-center justify-center bg-white rounded-lg border border-greyscale-border-default p-8">
            <img
              className="h-[400px] object-cover"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="flex justify-between mt-2 pt-2">
            <p className="font-bold ">{product.title}</p>
            <p>{product.category}</p>
          </div>
          <p className="max-w-[400px]">{product.description}</p>
          <div className="flex justify-between mt-2 pt-2">
            <Button
              text="Lägg till i varukorg"
              onClick={() => addToCart(product)}
            />
            <p>{product.price}$</p>
          </div>
        </div>
        <div className="m-4 p-4"></div>
      </div>
    </div>
  );
};

export default SingleProductPage;
