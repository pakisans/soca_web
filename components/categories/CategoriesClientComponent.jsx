"use client";

import { memo, useState, useEffect, useCallback, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import usePagination from "../hooks/usePagination";
import CategoryItem from "./CategoryItem";
import ProductsList from "../products/ProductsList";
import Pagination from "@/components/global/Pagination";

const CategoriesClientComponent = ({
  categories,
  articles,
  totalProducts,
  currentPage,
  totalPages,
}) => {
  const [activeParent, setActiveParent] = useState(null);
  const [currentArticles, setCurrentArticles] = useState(articles);
  const router = useRouter();
  const pathname = usePathname();
  const { rowsPerPage, setRowsPerPage, rowsPerPageOptions, setCurrentPage } =
    usePagination();
  useEffect(() => {
    setCurrentArticles(articles);
  }, [articles]);

  const handleCategorySelect = useCallback(
    (category) => {
      setActiveParent(activeParent === category.id ? null : category.id);
    },
    [activeParent]
  );

  const handleSortChange = (e) => {
    const sort = e.target.value;
    router.push(`${pathname}?sort=${sort}`);
  };

  const handlePageChange = (newPage) => {
    router.push(`${pathname}?page=${newPage}&limit=${rowsPerPage}`);
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    router.push(`${pathname}?page=1&limit=${newRowsPerPage}`);
  };

  const categoryItems = useMemo(
    () =>
      categories?.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          activeParent={activeParent}
          handleCategorySelect={handleCategorySelect}
        />
      )),
    [categories, activeParent, handleCategorySelect]
  );

  // Extract the last part of the pathname for the category name
  const categoryName = pathname.split("/").pop().replace(/-/g, " ");

  return (
    <div className="mx-auto w-full lg:mx-0 border-t border-t-mintCream">
      <div className="w-full bg-gradient-to-r from-gray-700 to-gray-900 py-4 px-[4rem] flex gap-x-10 items-center">
        <div className="relative group">
          <button className="text-white text-lg lg:text-[1.5rem] font-bold">
            Kategorije
          </button>
          <div className="absolute left-0 mt-2 w-[20rem] bg-gray-800 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity max-h-[500px] overflow-y-auto">
            <div className="flex flex-col p-4">{categoryItems}</div>
          </div>
        </div>
        <div className="relative group">
          <button className="text-white text-lg lg:text-[1.5rem] font-bold">
            Partneri
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity max-h-[500px] overflow-y-auto">
            <ul>
              <li className="p-2 hover:bg-gray-700">Partner 1</li>
              <li className="p-2 hover:bg-gray-700">Partner 2</li>
            </ul>
          </div>
        </div>
        <div className="relative group">
          <button className="text-white text-lg lg:text-[1.5rem] font-bold">
            Sortiranje
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <select
              className="w-full p-2 bg-gray-800 text-white border-none"
              onChange={handleSortChange}
            >
              <option value="relevance">Relevantnost</option>
              <option value="price-asc">Cena - rastuće</option>
              <option value="price-desc">Cena - opadajuće</option>
              <option value="name-asc">Naziv - A-Z</option>
              <option value="name-desc">Naziv - Z-A</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full mt-4 px-[4rem]">
        <div className="flex-1 w-full md:w-2/3 ml-auto">
          {categoryName && categoryName !== "proizvodi" ? (
            <>
              <div className="mb-4 flex flex-col md:flex-row items-center mx-auto">
                <h2 className="text-3xl lg:text-[2.2rem] font-bold text-gray-900">
                  Proizvodi za kategoriju:
                </h2>
                <h3 className="text-offRed text-center mt-5 md:mt-0 md:text-left text-2xl lg:text-[2.2rem] font-bold ml-2 uppercase">
                  {decodeURIComponent(categoryName)}
                </h3>
              </div>
              <ProductsList articles={currentArticles} />
            </>
          ) : null}
          {!categoryName || categoryName === "proizvodi" ? (
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Proizvodi
              </h2>
              <ProductsList articles={currentArticles} />
            </>
          ) : null}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        totalItems={totalProducts}
        rowsPerPageOptions={[10, 20, 50]}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        page={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default memo(CategoriesClientComponent);
