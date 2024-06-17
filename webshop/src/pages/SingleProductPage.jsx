//Sida för när du vill läsa mer om produkten.
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/dataFetching";
import SuccessButton from "../components/buttons/SuccessButton";
import BackButton from "../components/buttons/BackButton";

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
    <div className=" flex items-center justify-center w-full">
      <div className="flex flex-col container max-w-[1440px] justify-center items-center px-4 md:px-8 lg:px-40  ">
        <div className=" flex flex-col gap-4 max-w-[800px] py-4 lg:py-8">
          <div className=" flex ">
            <BackButton
              to={"/shop"}
              icon={
                <span className="material-symbols-outlined">arrow_back</span>
              }
              text={"Back to shop"}
            />
          </div>
          <div className="flex flex-col gap-3 p-8  border rounded-xl border-greyscale-border-default  bg-greyscale-surface-subtle ">
            <div className="flex items-center justify-center bg-white rounded-lg border border-greyscale-border-default p-8">
              <img
                className=" h-[200px] md:h-[300px] lg:h-[400px] object-cover"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className=" flex w-auto">
              <p className=" capitalize font-medium text-sm py-1 px-2 border border-greyscale-border-default rounded-full whitespace-nowrap">
                {product.category}
              </p>
            </div>
            <div className=" flex justify-between gap-6">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-lg ">{product.title}</p>
                <p className="">{product.description}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <SuccessButton
                text="Add to cart"
                icon={
                  <span className="material-symbols-outlined">
                    shopping_basket
                  </span>
                }
                onClick={() => addToCart(product)}
              />
              <p className=" text-base font-semibold">{product.price}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
