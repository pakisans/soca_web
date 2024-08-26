import React, { memo } from "react";
import Select from "react-select";
import LeftArrowIcon from "../icons/LeftArrowIcon";

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #4D4847",
    borderRadius: "0.375rem",
    padding: "0.5rem 0.75rem",
    boxShadow: "none",
    fontSize: "1.25rem",
    height: "3rem",
    "&:hover": {
      borderColor: "#8E1B13",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#8E1B13"
      : state.isFocused
      ? "#4D4847"
      : null,
    color: state.isSelected
      ? "#F7F7FF"
      : state.isFocused
      ? "#F7F7FF"
      : "#1C3738",
    fontSize: "1.25rem",
    padding: "0.5rem 0.75rem",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.375rem",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxHeight: "200px",
    overflowY: "scroll",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#8E1B13",
    "&:hover": {
      color: "#8E1B13",
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
      <Select
        value={options.find((option) => option.value === value)}
        onChange={onChange}
        options={options}
        styles={customStyles}
        placeholder="Izaberi"
        components={{
          DropdownIndicator: () => (
            <div className="flex items-center px-2 -rotate-90">
              <LeftArrowIcon width={24} height={24} color={"#8E1B13"} />{" "}
            </div>
          ),
        }}
      />
    </div>
  );
};

export default memo(CustomSelect);
