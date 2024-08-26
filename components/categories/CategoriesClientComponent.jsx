"use client";

import {
  memo,
  useState,
  useEffect,
  useCallback,
  useMemo,
  Fragment,
} from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import usePagination from "../hooks/usePagination";
import CategoryItem from "./CategoryItem";
import ProductsList from "../products/ProductsList";
import Pagination from "@/components/global/Pagination";
import CustomDropdown from "../global/CustomDropDown";
import Link from "next/link";

const CategoriesClientComponent = ({
  categories,
  articles,
  totalProducts,
  currentPage,
  totalPages,
  manufacturers,
  utilizedSearchParams,
}) => {
  const [activeParent, setActiveParent] = useState(null);
  const [currentArticles, setCurrentArticles] = useState(articles);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("pretraga");
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

  const handleSortChange = (sort) => {
    router.push(`${pathname}?sort=${sort}`);
  };

  const handlePageChange = (newPage) => {
    let pageUrl = `${pathname}?page=${newPage}&limit=${rowsPerPage}`;
    if (search) {
      pageUrl = `${pathname}?page=${newPage}&limit=${rowsPerPage}&pretraga=${search}`;
    }

    router.push(pageUrl);
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

  const categoryName = pathname.split("/").pop().replace(/-/g, " ");

  const sortOptions = [
    { value: "relevance", label: "Relevantnost" },
    { value: "price-asc", label: "Cena - rastuće" },
    { value: "price-desc", label: "Cena - opadajuće" },
    { value: "name-asc", label: "Naziv - A-Z" },
    { value: "name-desc", label: "Naziv - Z-A" },
  ];

  return (
    <div className="mx-auto w-full lg:mx-0 border-t border-t-mintCream">
      <div className="w-full bg-gradient-to-r from-gray-700 to-black py-4 px-[2rem] sm:px-[4rem] flex gap-10 xl:gap-x-[12rem] items-center">
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
          <div className="absolute left-0 mt-2 w-80 bg-gray-800 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity max-h-[500px] overflow-y-auto">
            <ul className="flex flex-col py-10 p-4 w-full">
              {manufacturers?.map((item, key) => {
                if (!item.vidljiv) {
                  return;
                }
                const queryParams = new URLSearchParams(utilizedSearchParams);
                queryParams.set("partner", item.sifra);

                return (
                  <li
                    key={`proizvodjac-${key}`}
                    className="w-full hover:bg-gray-700 transition duration-300 py-4 px-2 hover:text-offRed"
                  >
                    <Link
                      className="w-full text-[1.4rem]"
                      href={`/proizvodi?${queryParams.toString()}`}
                    >
                      {item.naziv}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <CustomDropdown options={sortOptions} onChange={handleSortChange} />
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full mt-4 px-[2rem] sm:px-[4rem]">
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
              {search && (
                <div className="w-full mt-4">
                  <p className="text-xl text-gray-700">
                    Rezultati pretrage za: <strong>{search}</strong>
                  </p>
                </div>
              )}
              <ProductsList articles={currentArticles} />
            </>
          ) : null}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        totalItems={totalProducts}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        page={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default memo(CategoriesClientComponent);
