"use client";
import { memo, useState } from "react";
import Image from "next/image";

const FeaturedProductAccordion = ({
  title,
  titleDescription,
  children,
  imageUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 mb-4 pb-5">
      <button
        onClick={toggleAccordion}
        className="flex flex-row justify-between  w-full p-4 text-lg font-semibold text-left text-gray-800 bg-white focus:outline-none"
      >
        <div className="flex flex-col items-center md:flex-row gap-4 w-full">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              width={600}
              height={600}
              objectFit="fill"
              className="w-[300px] h-[300px]"
            />
          ) : null}
          <div className="flex flex-col">
            <span className="text-xl md:text-4xl font-bold text-black">
              {title}
            </span>
            <span className="text-sm md:text-lg text-gray-600 mt-2">
              {titleDescription}
            </span>
          </div>
        </div>
        <svg
          className={`w-16 h-16 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-full" : "max-h-0"
        }`}
      >
        {isOpen && <div className="p-4 bg-white">{children}</div>}
      </div>
    </div>
  );
};

export default memo(FeaturedProductAccordion);
