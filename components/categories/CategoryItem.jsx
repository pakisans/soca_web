import { memo } from "react";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { capitalizeFirstLetter } from "@/utils/textUtil";

const CategoryItem = memo(
  ({
    category,
    activeParent,
    handleCategorySelect,
    onMouseOver,
    onMouseOut,
  }) => {
    const isActive = activeParent === category.id;
    return (
      <div
        className="w-full md:flex md:flex-wrap"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <div
          onClick={() => handleCategorySelect(category)}
          className={`flex justify-between items-center gap-8 cursor-pointer p-4 text-white hover:text-mint transition duration-300 text-lg ${
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
        {isActive && category.groups.length > 0 && (
          <Transition
            show={isActive}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="md:flex md:flex-wrap bg-gray-800 text-white rounded-b-lg shadow-lg max-h-[500px] overflow-y-auto">
              {category.groups.map((group) => (
                <Link
                  key={group.id}
                  href={`/proizvodi/${category.naziv
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/č/g, "c")
                    .replace(/ć/g, "c")
                    .replace(/š/g, "s")
                    .replace(/Š/g, "s")
                    .replace(/đ/g, "dj")
                    .replace(/ž/g, "z")}/${group.naziv
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/č/g, "c")
                    .replace(/ć/g, "c")
                    .replace(/š/g, "s")
                    .replace(/đ/g, "dj")
                    .replace(/ž/g, "z")}`}
                >
                  <div className="cursor-pointe text-[14px] p-4 hover:bg-gray-700 hover:text-mint transition duration-300">
                    &#x2022; {capitalizeFirstLetter(group.naziv)}
                  </div>
                </Link>
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
