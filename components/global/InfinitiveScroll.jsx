"use client";
import { memo, useRef } from "react";
import ArrowRight from "../icons/ArrowRight";

const InfiniteScroll = ({ children }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.firstChild.offsetWidth + 16; // Assuming gap between cards is 16px
      if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth;
      }
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.firstChild.offsetWidth + 16; // Assuming gap between cards is 16px
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      }
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-x-auto hide-scrollbar">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-50 rounded-full"
        onClick={scrollLeft}
      >
        <ArrowRight width={30} height={30} styles={"rotate-180"} />
      </button>
      <div className="absolute left-0 top-0 h-full w-[5%] bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-40"></div>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar whitespace-nowrap scroll-smooth py-6 px-12 relative"
      >
        {children}
      </div>
      <div className="absolute right-0 top-0 h-full w-[5%] bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-40"></div>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50 rounded-full"
        onClick={scrollRight}
      >
        <ArrowRight width={30} height={30} />
      </button>
    </div>
  );
};

export default memo(InfiniteScroll);
