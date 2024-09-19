"use client";

import { memo, useState, useEffect, useCallback, useMemo } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import usePagination from "../hooks/usePagination";
import CategoryItem from "./CategoryItem";
import ProductsList from "../products/ProductsList";
import Pagination from "@/components/global/Pagination";
import CustomDropdown from "../global/CustomDropDown";
import Link from "next/link";
import { cn } from "@/utils/CN";

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
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isPartnerMenuOpen, setIsPartnerMenuOpen] = useState(false);
  const [currentArticles, setCurrentArticles] = useState(articles);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("pretraga");
  const partner = searchParams.get("partner");
  const sort = searchParams.get("sort");
  const { rowsPerPage, setRowsPerPage, rowsPerPageOptions, setCurrentPage } =
    usePagination();

  let timer;

  useEffect(() => {
    setCurrentArticles(articles);
  }, [articles]);

  useEffect(() => {
    if (isHovered) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isHovered, activeParent]);

  const handleCategorySelect = useCallback(
    (category) => {
      setActiveParent(activeParent === category.id ? null : category.id);
    },
    [activeParent]
  );

  const handleSortChange = (sort) => {
    const queryParams = new URLSearchParams(searchParams);

    // Dodajemo ili ažuriramo sort parametar
    queryParams.set("sort", sort);

    // Prosleđujemo sve query parametre nazad u URL
    router.push(`${pathname}?${queryParams.toString()}`);
  };

  const handlePageChange = (newPage) => {
    let pageUrl = `${pathname}?page=${newPage}&limit=${rowsPerPage}`;
    if (search) {
      pageUrl = `${pathname}?page=${newPage}&limit=${rowsPerPage}&pretraga=${search}`;
    }

    if (partner) {
      pageUrl += `&partner=${partner}`;
    }

    if (sort) {
      pageUrl += `&sort=${sort}`;
    }

    router.push(pageUrl);
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);

    let pageUrl = `${pathname}?page=1&limit=${newRowsPerPage}`;

    if (search) {
      pageUrl += `&pretraga=${search}`;
    }

    const partner = searchParams.get("partner");
    if (partner) {
      pageUrl += `&partner=${partner}`;
    }

    if (sort) {
      pageUrl += `&sort=${sort}`;
    }

    router.push(pageUrl);
  };

  const handleMouseEnterCategory = () => {
    clearTimeout(timer);
    setIsPartnerMenuOpen(false);
    setIsCategoryMenuOpen(true);
  };

  const handleMouseLeaveCategory = () => {
    timer = setTimeout(() => {
      setIsCategoryMenuOpen(false);
    }, 200);
  };

  const handleMouseEnterPartner = () => {
    clearTimeout(timer);
    setIsCategoryMenuOpen(false);
    setIsPartnerMenuOpen(true);
  };

  const handleMouseLeavePartner = () => {
    timer = setTimeout(() => {
      setIsPartnerMenuOpen(false);
    }, 200);
  };

  const categoryItems = useMemo(
    () =>
      categories?.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          activeParent={activeParent}
          handleCategorySelect={handleCategorySelect}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      )),
    [categories, activeParent, handleCategorySelect]
  );

  const categoryName = pathname.split("/").pop().replace(/-/g, " ");

  const sortOptions = [
    { value: "relevance", label: "Relevantnost" },
    { value: "price-desc", label: "Cena - skuplje" },
    { value: "price-asc", label: "Cena - jeftinije" },
    { value: "name-asc", label: "Naziv - A-Z" },
    { value: "name-desc", label: "Naziv - Z-A" },
  ];

  return (
    <div className="mx-auto w-full lg:mx-0 border-t border-t-mintCream">
      <div className="w-full bg-gradient-to-r from-gray-700 to-black py-4 px-[2rem] sm:px-[4rem] flex gap-10 xl:gap-x-[12rem] items-center">
        <div
          className="relative"
          onMouseEnter={handleMouseEnterCategory}
          onMouseLeave={handleMouseLeaveCategory}
        >
          <button
            className="text-white text-lg lg:text-[1.5rem] font-bold"
            onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
          >
            Kategorije
          </button>
          <div
            className={cn(
              "absolute left-0 mt-4 w-[35rem] xl:w-[110rem] 2xl:w-[140rem] bg-gray-800 text-white shadow-lg transition-opacity duration-300 ease-in-out transform-gpu",
              {
                hidden: !isCategoryMenuOpen,
                block: isCategoryMenuOpen,
              }
            )}
            onMouseEnter={handleMouseEnterCategory}
            onMouseLeave={handleMouseLeaveCategory}
          >
            <div className="flex flex-col gap-4 p-4 max-w-[35rem] md:max-w-none">
              {categoryItems}
            </div>
          </div>
        </div>
        <div
          className="relative"
          onMouseEnter={handleMouseEnterPartner}
          onMouseLeave={handleMouseLeavePartner}
        >
          <button
            className="text-white text-lg lg:text-[1.5rem] font-bold"
            onClick={() => setIsPartnerMenuOpen(!isPartnerMenuOpen)}
          >
            Partneri
          </button>
          <div
            className={cn(
              "absolute -left-40 mt-[10px] md:mt-4 w-[30rem] bg-gray-800 text-white shadow-lg transition-opacity duration-300 ease-in-out transform-gpu max-h-[500px] overflow-y-scroll",
              {
                hidden: !isPartnerMenuOpen,
                block: isPartnerMenuOpen,
              }
            )}
            onMouseEnter={handleMouseEnterPartner}
            onMouseLeave={handleMouseLeavePartner}
          >
            <ul className="flex flex-col pb-10 p-4 w-full">
              {manufacturers?.map((item, key) => {
                if (!item.vidljiv) {
                  return;
                }
                const queryParams = new URLSearchParams(utilizedSearchParams);
                queryParams.set("partner", item.sifra);

                return (
                  <Link
                    className="w-full text-[1.4rem]"
                    href={`/proizvodi?${queryParams.toString()}`}
                  >
                    <li
                      key={`proizvodjac-${key}`}
                      className="w-full hover:bg-gray-700 transition duration-300 py-4 px-2 hover:text-offRed"
                    >
                      {item.naziv}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <CustomDropdown
          label={"Sortiraj"}
          options={sortOptions}
          onChange={handleSortChange}
        />
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
              {currentArticles?.length > 0 ? (
                <ProductsList articles={currentArticles} />
              ) : (
                <div className="w-full py-[40px]">
                  <p className="text-[2rem] md:text-[2.6rem] leading-[32px] text-center">
                    Trenutno nema proizvoda koji odgovaraju vašim kriterijumima
                    pretrage. Molimo vas da pokušate sa drugačijim filterima ili
                    pretragom. Naša ponuda se stalno ažurira, pa vas pozivamo da
                    nas posetite ponovo uskoro kako biste videli nove proizvode.
                  </p>
                </div>
              )}
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
