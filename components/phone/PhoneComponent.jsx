"use client";
import { cloneElement, memo } from "react";

const PhoneComponent = ({ phoneNumber, Icon }) => {
  return (
    <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 group">
      {cloneElement(Icon, {
        width: 20,
        height: 20,
        className: "fill-current text-mintCream group-hover:text-offRed",
      })}
      <p className="text-mintCream text-[1.4rem] font-bold group-hover:text-offRed">
        {phoneNumber}
      </p>
    </a>
  );
};

export default memo(PhoneComponent);
