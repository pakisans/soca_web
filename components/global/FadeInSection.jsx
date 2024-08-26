"use client";
import { memo, useEffect } from "react";

const FadeInSection = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fade-in opacity-0 transition-opacity duration-700">
      {children}
    </div>
  );
};

export default memo(FadeInSection);
