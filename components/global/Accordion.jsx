"use client";
import React, { memo, useState, useRef, useEffect } from "react";
import ChevronDownIcon from "../icons/ChevronDownIcon";

const Accordion = ({ title, childrens }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  const accordionRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? 0 : contentRef.current.scrollHeight);

    if (!isOpen) {
      setTimeout(() => {
        accordionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 500);
    }
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div ref={accordionRef} className="border overflow-hidden">
      <summary
        onClick={toggleOpen}
        className="cursor-pointer list-none p-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-tr-lg text-white flex justify-between items-center text-[1.8rem] leading-[2.4rem]"
      >
        {title}
        <ChevronDownIcon
          width={20}
          height={20}
          color={"#F7F7FF"}
          styles={`transition-transform duration-900 ml-auto ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </summary>
      <div
        ref={contentRef}
        style={{
          maxHeight: `${height}px`,
          transition: "max-height 0.5s ease-in-out",
        }}
        className="transition-opacity duration-500 ease-in-out"
      >
        {childrens.map((item, index) => (
          <div
            key={`accordion-item-${index}`}
            className="p-4 border-t"
            style={{ opacity: isOpen ? 1 : 0 }}
          >
            <p className="text-[1.8rem] font-bold text-offRed">
              ⁇ {item.subtitle}
            </p>
            <p className="text-[1.4rem] text-gunMetal ml-[.8rem]">
              &nbsp;&nbsp;▸ {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Accordion);
