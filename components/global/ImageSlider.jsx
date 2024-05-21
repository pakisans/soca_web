"use client";
import { useState, useEffect, memo, useRef, Fragment } from "react";
import Image from "next/image";

const ImageSlider = ({ images, interval = 6000 }) => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      const nextIndex = (current + 1) % images.length;
      setCurrent(nextIndex);

      if (nextIndex === 0) {
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = `translate3d(0, 0, 0)`;
        sliderRef.current.offsetWidth;

        setTimeout(() => {
          sliderRef.current.style.transition = "transform 3s ease-in-out";
        }, 10);
      }
    }, interval);

    return () => clearInterval(id);
  }, [current, images.length, interval]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("partners");
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop - 50, // Adjust this value to control the offset
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative overflow-hidden w-full h-[30rem] md:h-[50rem] xl:h-[60rem] 2xl:h-[70rem] z-0 hidden lg:block">
      {/* Static text element */}
      <div className="absolute right-0 top-1/9 text-right z-50 p-4 bg-black bg-opacity-50 rounded-lg shadow-lg max-w-[40%] md:max-w-[30%] lg:max-w-[25%] pr-[4rem]">
        <p className="text-white font-extrabold uppercase text-[2rem] md:text-[4rem] leading-[2.4rem] md:leading-[4.8rem] text-animation">
          30+ Godina poverenja i kvaliteta u vašoj službi
        </p>
        <p className="font-medium text-[1.5rem] md:text-[2rem] leading-[2rem] md:leading-[2.5rem] mt-4 text-white">
          Servis i prodaja bele tehnike
        </p>
        <p className="font-medium text-[1.2rem] md:text-[1.5rem] leading-[1.5rem] md:leading-[2rem] mt-2 text-white">
          Kontaktirajte nas za više informacija
        </p>
        <button
          onClick={scrollToNextSection}
          className="mt-10 px-6 py-2 bg-offRed text-white text-[1.6rem] font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Pogledaj više
        </button>
      </div>

      <div
        ref={sliderRef}
        className="flex w-full h-full"
        style={{
          transform: `translate3d(-${current * 100}%, 0, 0)`,
          transition: "transform 3s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <Fragment key={index}>
            <div className="flex-shrink-0 w-full h-full relative">
              <Image
                src={image.src}
                alt={image.alt || `Slide ${index}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
                className="opacity-75"
                sizes="100%"
              />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default memo(ImageSlider);
