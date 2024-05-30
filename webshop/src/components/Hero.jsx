import React from "react";

const HeroSection = () => {
  return (
    <div className="heroContainer w-full flex justify-center sm:py-4 md:py-8 lg:py-32 ">
      <div className=" max-w-[1120px] flex flex-col-reverse items-center gap-6 lg:flex-row lg:justify-between ">
        <div className=" flex flex-col gap-6 ">
          <div className=" max-w-[600px] flex flex-col text-center items-start justify-between lg:text-left">
            <h1>Welcome to HaulMart!</h1>
            <p>
              Let's do some shopping! Let's do some shopping!Let's do some
              shopping!Let's do some shopping!Let's do some shopping!Let's do
              some shopping!
            </p>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="text-lg font-roboto text-greyscale-text-negative bg-primary-surface-default rounded-lg border hover:bg-primary-surface-darker transition-colors duration-300">
              Go to shop
            </button>

            <button className="text-lg font-roboto text-label bg-greyscale-surface-default rounded-lg hover:bg-primary-surface-darker transition-colors duration-300">
              About us
            </button>
          </div>
        </div>
        <div className=" w-[500px] h-[400px] ml-10 bg-slate-400">en bild</div>
      </div>
    </div>
  );
};

export default HeroSection;
