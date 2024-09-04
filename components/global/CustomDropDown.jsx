import { useState, useRef, memo } from "react";
import { Transition } from "@headlessui/react";
import { cn } from "@/utils/CN";

const CustomDropdown = ({ options, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="text-white text-lg lg:text-[1.5rem] font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          ref={dropdownRef}
          className={cn(
            "absolute -left-40 mt-[10px] md:mt-0 w-[20rem] md:w-[30rem] bg-gray-800 text-white shadow-lg transition-opacity duration-300 ease-in-out transform-gpu",
            {
              hidden: !isOpen,
              block: isOpen,
            }
          )}
        >
          <ul className="flex flex-col gap-4 p-4">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className="w-full hover:bg-gray-700 transition duration-300 text-[1.4rem] py-4 px-2 hover:text-offRed cursor-pointer"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default memo(CustomDropdown);
