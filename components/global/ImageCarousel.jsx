"use client";
import Image from "next/image";
import { memo, useState } from "react";
import RightArrowIcon from "../icons/RightArrowIcon";
import LeftArrowIcon from "../icons/LeftArrowIcon";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageNavigation = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  };

  return (
    <div className="relative w-full">
      <div className="flex overflow-hidden relative w-full h-[30rem] md:h-[80rem] xl:h-[100rem]">
        {images?.map((img, index) => (
          <>
            {img.text1 ? (
              <p className="text-offRed font-extrabold uppercase mx-auto text-[4rem] leading-[4.2rem] mt-[2rem] text-center z-[999]">
                {img?.text1}
              </p>
            ) : null}
            <div
              key={index}
              className={`w-screen absolute inset-0 transition-opacity h-full duration-500 ease-in-out ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: "cover" }}
                className="opacity-75"
                sizes="(min-width: 808px) 100vw, 100vw"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => handleImageNavigation("prev")}
                    className="absolute left-2 z-20 top-1/2 transform -translate-y-1/2"
                  >
                    <LeftArrowIcon width={30} height={30} color="#FFF" />
                  </button>
                  <button
                    onClick={() => handleImageNavigation("next")}
                    className="absolute right-2 z-20 top-1/2 transform -translate-y-1/2"
                  >
                    <RightArrowIcon width={30} height={30} color="#FFF" />
                  </button>
                </>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default memo(ImageCarousel);
