"use client";
import { memo, useState } from "react";
import Image from "next/image";

const ProductSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[50rem]">
        <Image
          src={images[currentSlide]}
          alt={`Istaknuti proizvod ${currentSlide}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 text-white px-4 py-1 rounded-r-lg text-[3rem]"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 text-white px-4 py-1 rounded-l-lg text-[3rem]"
      >
        &#10095;
      </button>
    </div>
  );
};

export default memo(ProductSlider);
