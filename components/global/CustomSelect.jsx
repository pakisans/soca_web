import React, { memo } from "react";
import Select from "react-select";
import ArrowRight from "@/components/icons/ArrowRight";
import LeftArrowIcon from "../icons/LeftArrowIcon";

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #4D4847", // davyGray
    borderRadius: "0.375rem", // rounded-lg
    padding: "0.5rem 0.75rem", // larger padding
    boxShadow: "none",
    fontSize: "1.25rem", // larger text
    height: "3rem", // larger container
    "&:hover": {
      borderColor: "#8E1B13", // offRed
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#8E1B13"
      : state.isFocused
      ? "#4D4847"
      : null, // offRed and davyGray
    color: state.isSelected
      ? "#F7F7FF"
      : state.isFocused
      ? "#F7F7FF"
      : "#1C3738", // mintCream and gunMetal
    fontSize: "1.25rem", // larger text
    padding: "0.5rem 0.75rem", // larger padding
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.375rem", // rounded-lg
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // custom shadow
    maxHeight: "200px", // fixed height
    overflowY: "scroll", // scrollable
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#8E1B13", // offRed
    "&:hover": {
      color: "#8E1B13", // offRed
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const CustomSelect = ({ options, value, onChange, label }) => {
  return (
    <div className="relative inline-block w-full text-gray-700">
      {label && <label className="block text-lg font-bold mb-2">{label}</label>}{" "}
      {/* Increased label size */}
      <Select
        value={options.find((option) => option.value === value)}
        onChange={onChange}
        options={options}
        styles={customStyles}
        components={{
          DropdownIndicator: () => (
            <div className="flex items-center px-2 -rotate-90">
              <LeftArrowIcon width={24} height={24} color={"#8E1B13"} />{" "}
              {/* Increased icon size */}
            </div>
          ),
        }}
      />
    </div>
  );
};

export default memo(CustomSelect);
