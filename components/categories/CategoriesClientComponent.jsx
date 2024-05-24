"use client";

import { memo, useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import usePagination from "../hooks/usePagination";
import CategoryItem from "./CategoryItem";
import ProductsList from "../products/ProductsList";

const CategoriesClientComponent = ({
  categories,
  articles,
  totalProducts,
  currentPage,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeParent, setActiveParent] = useState(null);
  const [currentArticles, setCurrentArticles] = useState(articles);
  const router = useRouter();
  const { rowsPerPage, setRowsPerPage, rowsPerPageOptions } = usePagination();

  useEffect(() => {
    setCurrentArticles(articles);
  }, [articles]);

  const handleCategorySelect = useCallback(
    (category) => {
      if (!category.groups.length) {
        setSelectedCategory(category);
      }
      setActiveParent(activeParent === category.id ? null : category.id);
    },
    [activeParent]
  );

  const categoryItems = useMemo(
    () =>
      categories?.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          setSelectedCategory={setSelectedCategory}
          activeParent={activeParent}
          handleCategorySelect={handleCategorySelect}
        />
      )),
    [categories, activeParent, handleCategorySelect]
  );

  return (
    <div className="md:py-10 mx-auto w-full lg:mx-0">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="w-full md:w-1/3 md:mt-[3.2rem]">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-700 border-b border-b-slate-900 to-gray-900 rounded-tr-lg text-mintCream py-5 pl-[4rem]">
            Kategorije
          </h1>
          <div className="flex flex-col bg-gradient-to-r from-gray-700 to-gray-900 rounded-br-lg">
            {categoryItems}
          </div>
        </div>

        <div className="flex-1 w-full md:w-2/3 ml-auto">
          {selectedCategory ? (
            <div className="mb-4 flex items-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Proizvodi za kategoriju:
              </h2>
              <h3 className="text-offRed text-3xl font-bold ml-2 uppercase">
                {selectedCategory.naziv}
              </h3>
            </div>
          ) : (
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proizvodi</h2>
          )}
          <ProductsList articles={currentArticles} />
        </div>
      </div>
    </div>
  );
};

export default memo(CategoriesClientComponent);
