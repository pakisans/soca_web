import React, { memo } from "react";
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
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    onRowsPerPageChange(newRowsPerPage);
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
    <div className="flex flex-col md:flex-row mx-auto items-center mt-4 w-fit gap-y-10 gap-x-40 md:px-[4rem] md:mx-0 md:ml-auto pb-[2rem]">
      <div className="flex items-center mb-2 gap-10">
        <span className="w-fit text-xl">Po stranici:</span>
        <div className="w-[10rem]">
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
          onClick={() => {
            if (currentPage != 1) handlePageChange(currentPage - 1);
          }}
          disabled={currentPage == 1}
          className={clsx(
            "px-3 py-1 border border-gray-300 rounded  md:text-[1.6rem]",
            currentPage == 1 && "cursor-not-allowed opacity-50",
            currentPage !== 1 && "hover:bg-gray-300"
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
          onClick={() => {
            if (currentPage != totalPages)
              handlePageChange(Number(currentPage) + 1);
          }}
          disabled={currentPage === totalPages}
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
