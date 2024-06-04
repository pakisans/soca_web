import { useSearchParams } from "next/navigation";
import { useState } from "react";

const usePagination = () => {
  const searchParams = useSearchParams();
  const [rowsPerPage, setRowsPerPage] = useState(
    Number(searchParams.get("limit")) || 20
  );
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );
  const rowsPerPageOptions = [10, 25, 50, 100, 200];

  return {
    rowsPerPage,
    setRowsPerPage,
    currentPage,
    setCurrentPage,
    rowsPerPageOptions,
  };
};

export default usePagination;
