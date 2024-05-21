import { memo } from "react";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";

const CategoryItem = memo(
  ({ category, setSelectedCategory, activeParent, handleCategorySelect }) => {
    const isActive = activeParent === category.sifra;
    const router = useRouter();

    return (
      <div className="w-full">
        <div
          onClick={() => handleCategorySelect(category)}
          className={`flex justify-between items-center cursor-pointer p-4 pl-[4rem] text-white shadow-md hover:shadow-lg hover:text-offRed transition duration-300 text-[1.8rem] ${
            isActive ? "shadow-lg" : ""
          }`}
        >
          <span>{category.naziv}</span>
          <div
            className={`transform transition-transform duration-300 ${
              isActive ? "rotate-180" : ""
            }`}
          >
            <ChevronDownIcon width={15} height={15} color={"#F7F7FF"} />
          </div>
        </div>
        {isActive && category.children.length > 0 && (
          <Transition
            show={isActive}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="bg-gray-800 text-white rounded-b-lg shadow-lg">
              {category.children.map((child) => (
                <div
                  key={child.sifra}
                  onClick={() => {
                    setSelectedCategory(child);
                    router.push(`/proizvodi?kategorija=${child.naziv}`);
                  }}
                  className="cursor-pointer text-[1.6rem] p-4 pl-[4.8rem] hover:bg-gray-700 hover:text-offRed transition duration-300"
                >
                  {child.naziv}
                </div>
              ))}
            </div>
          </Transition>
        )}
      </div>
    );
  }
);
CategoryItem.displayName = "CategoryItem";

export default CategoryItem;
