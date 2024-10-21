"use client";
import { useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/proizvodi?pretraga=${query}`);
    } else {
      router.push("/proizvodi"); // Redirect to the base products page if the query is empty
    }
  };

  const clearSearch = () => {
    setQuery("");
    router.push("/proizvodi"); // Clear the query parameter
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-mintCream text-black rounded-[.5rem] overflow-hidden shadow-md"
    >
      <div className="relative flex-grow">
        <input
          type="search"
          placeholder="Pronađi deo..."
          className={clsx(
            "bg-transparent w-full p-4 outline-none rounded-l-[.5rem] focus:outline-none focus:ring-2 focus:ring-offRed ml-4 sm:ml-0 placeholder:font-black placeholder:text-offRed",
            pathname === "/proizvodi"
              ? "text-[1.4rem] sm:text-[2.2rem] xlg:text-[2.8rem]"
              : "text-[1.4rem]"
          )}
          aria-label="Pretraga proizvoda"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            WebkitAppearance: "none",
            MozAppearance: "textfield",
            appearance: "none",
          }}
        />
        <button
          type="button"
          onClick={clearSearch}
          className={clsx(
            `absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-1 rounded-[1rem] transition-colors duration-200`,
            !query && "hidden",
            pathname === "/proizvodi" ? "w-14 h-14 text-[2rem]" : ""
          )}
        >
          X
        </button>
      </div>
      <button
        type="submit"
        className="bg-offRed hover:bg-red-600 p-3 transition-colors duration-200 rounded-r-[.5rem]"
      >
        {pathname === "/proizvodi" ? (
          <SearchIcon
            styles={"hidden xlg:block"}
            width={50}
            height={50}
            color={"#FFFFFF"}
          />
        ) : null}
        {pathname === "/proizvodi" ? (
          <SearchIcon
            styles={"hidden sm:block xlg:hidden"}
            width={40}
            height={40}
            color={"#FFFFFF"}
          />
        ) : null}
        {pathname === "/proizvodi" ? (
          <SearchIcon
            styles={"block sm:hidden"}
            width={24}
            height={24}
            color={"#FFFFFF"}
          />
        ) : null}
        {pathname !== "/proizvodi" ? (
          <SearchIcon width={24} height={24} color={"#FFFFFF"} />
        ) : null}
      </button>
    </form>
  );
};

export default Search;
