import React, { memo } from "react";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";
import CustomSelect from "./CustomSelect";

const Pagination = ({
  currentPage,
  rowsPerPage,
  totalItems,
  rowsPerPageOptions,
  onPageChange,
  onRowsPerPageChange,
  totalPages,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
    router.push({
      pathname,
      query: { ...router.query, page: newPage, limit: rowsPerPage },
    });
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    onRowsPerPageChange(newRowsPerPage);
    router.push({
      pathname,
      query: { ...router.query, page: 1, limit: newRowsPerPage },
    });
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(
        currentPage - Math.floor(maxVisiblePages / 2),
        1
      );
      let endPage = startPage + maxVisiblePages - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - maxVisiblePages + 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex flex-col md:flex-row items-center mt-4 w-fit gap-40 px-[4rem] ml-auto">
      <div className="flex items-center space-x-2 mb-2">
        <span className="w-full">Po stranici:</span>
        <div className="w-[20rem]">
          <CustomSelect
            options={rowsPerPageOptions.map((option) => ({
              value: option,
              label: option,
            }))}
            value={rowsPerPage}
            onChange={(selectedOption) =>
              handleRowsPerPageChange(selectedOption.value)
            }
            label=""
          />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage == 1}
          className={clsx(
            "px-3 py-1 border border-gray-300 rounded  md:text-[1.6rem]",
            currentPage == 1 && "cursor-not-allowed opacity-50",
            currentPage != 1 && "hover:bg-gray-300"
          )}
        >
          Prethodna
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={clsx(
              "px-3 py-1 border border-gray-300 md:text-[1.6rem] rounded hover:bg-gray-300 ",
              currentPage == pageNumber && "bg-gray-300 text-offRed"
            )}
          >
            {pageNumber}
          </button>
        ))}
        {totalPages > 5 && currentPage < totalPages - 2 && (
          <>
            <span>...</span>
            <button
              onClick={() => handlePageChange(totalPages)}
              className="px-3 py-1 border border-gray-300 rounded md:text-[1.6rem]"
            >
              {totalPages}
            </button>
          </>
        )}
        <button
          onClick={() => handlePageChange(Number(currentPage) + 1)}
          disabled={currentPage == totalPages}
          className={clsx(
            "px-3 py-1 border border-gray-300 rounded  md:text-[1.6rem]",
            currentPage == totalPages && "cursor-not-allowed opacity-50",
            currentPage != totalPages && "hover:bg-gray-300"
          )}
        >
          Sledeća
        </button>
      </div>
    </div>
  );
};

export default memo(Pagination);
