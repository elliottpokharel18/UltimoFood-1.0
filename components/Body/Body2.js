import React from "react";
import Image from "next/image";
import DD from "../assets/DD.svg";

function Body1({ Title }) {
  return (
    <div className="md:mb-24 ">
      <div className="container md:mb-1  flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
      <div className="flex items-center  justify-center w-full sm:mb-16 md:mb-24 h-96 md:w-1/2 lg:w-3/5 ">
          <Image
            className="object-cover w-full md:flo  h-full max-w-2xl  rounded-md"
            src={DD}
            alt="fast"
          />
        </div>
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-12 md:order-2">
            <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
              {Title}
            </h1>
            <p className="mt-1 text-gray-600 text-lg dark:text-gray-300">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A posuere
              malesuada elementum massa sit. Adipiscing arcu maecenas viverra
              donec non elementum in. Dignissim commodo lorem odio ligula arcu
              sagittis, at cras accumsan. Vitae elementum etiam eget id
              curabitur. Ac enim maecenas hendrerit quisque sed.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Body1;
