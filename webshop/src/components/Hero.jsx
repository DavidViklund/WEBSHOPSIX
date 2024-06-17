//Hmmm... EN HERO med bildspel från API
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Button from "./buttons/Button";
import SecondaryButton from "./buttons/SecondaryButton";
import { getProducts } from "../api/dataFetching";

const HeroSection = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const [imageUrl, setImageUrl] = useState(null);

  //Här plockar vi random bilder från API till ett bildspel.
  useEffect(() => {
    if (products && products.length > 0) {
      const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * products.length);
        return products[randomIndex].image;
      };
      setImageUrl(getRandomImage());
      const intervalId = setInterval(() => {
        setImageUrl(getRandomImage());
      }, 2000);
      return () => clearInterval(intervalId);
    }
  }, [products]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="heroContainer w-full flex justify-center sm:py-4 md:py-8 lg:py-32 ">
      <div className="max-w-[1120px] flex flex-col-reverse items-center gap-6 lg:flex-row lg:justify-between">
        <div className=" max-w-[500px] flex flex-col gap-6">
          <div className=" flex flex-col text-center gap-4 items-start justify-between lg:text-left">
            <h1>Welcome to HaulMart!</h1>
            <p>
              Let's do some shopping! Let's do some shopping! Let's do some
              shopping! Let's do some shopping! Let's do some shopping! Let's do
              some shopping!
            </p>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start">
            <Button to="/shop" text={"Go to shop"} />
            <SecondaryButton
              to="/about"
              className="flex items-center justify-between px-8 py-4 font-normal rounded-xl bg-greyscale-surface-default text-primary-text-label hover:bg-primary-surface-darker hover:text-greyscale-text-negative border border-primary-border-lighter"
              text={"About us"}
            />
          </div>
        </div>
        <div className="flex items-center bg-white  rounded-xl p-4 m-4 overflow-hidden">
          {imageUrl ? (
            <img
              className=" sm:w-[300px] md:w-[400px] lg:w-[500px] h-[400px] object-fit"
              src={imageUrl}
              alt="Hero"
            />
          ) : (
            <div>No image available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
