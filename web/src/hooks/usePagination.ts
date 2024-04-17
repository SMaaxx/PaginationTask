import { useState } from 'react';

interface Props {
  contentPerPage: number,
  count: number
}

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const usePagination = ({contentPerPage, count}: Props) => {
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(count / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;

  const changePage = (direction: boolean) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }

        return state + 1;
      }

      if (state === 1) {
        return state;
      }

      return state - 1;
    });
  };

  const setPageSafe = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount);
    }

    if (num < 1) {
      setPage(1);
    }

    setPage(num);
  };
  const pagesToShow = page <= 5 ? range(1, 10) : pageCount === page ? range(page - 10, page) : range(page - 5, page + 5);

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSafe,
    firstContentIndex,
    lastContentIndex,
    page,
    pagesToShow
  };
};

export default usePagination;
