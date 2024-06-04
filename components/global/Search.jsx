"use client";
import { useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import { useRouter } from "next/navigation";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/proizvodi?pretraga=${query}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="search"
        placeholder="Pretraži..."
        className="border-b p-2 lg:p-4 text-[1.4rem] placeholder:text-[1.4rem] outline-0 focus:ring-2 focus:ring-blue-500"
        aria-label="Pretraga proizvoda"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="py-2 px-4 rounded hover:bg-gray-200 transition"
      >
        <SearchIcon width={20} height={20} color={"#1C3738"} />
      </button>
    </form>
  );
};

export default Search;
