import styles from './PaginationPanel.module.scss';
import ArrowIcon from "./icons/ArrowIcon/ArrowIcon";
import DoubleArrowIcon from "./icons/DoubleArrowIcon/DoubleArrowIcon";
import React from "react";

interface Props {
  activePage: number,
  totalPages: number,
  prevPage: () => void,
  nextPage: () => void,
  setPage: (num: number) => void,
  pagesToShow: number[]
}

const PaginationPanel: React.FC<Props> = ({
  activePage,
  totalPages,
  prevPage,
  nextPage,
  setPage,
  pagesToShow
}) => {
  const getButtonStyle = (pageNumber: number) => activePage === pageNumber
    ? `${styles.page} ${styles.active}`
    : `${styles.page}`;

  return (
    <div className={styles.container}>
      <div
        className={styles.page}
        onClick={() => setPage(1)}
      >
        <DoubleArrowIcon direction={'left'}/>
      </div>
      <div
        className={styles.page}
        onClick={prevPage}
      >
        <ArrowIcon direction={'left'}/>
      </div>
      {pagesToShow.map(item => {
        return (
          <div
            key={item}
            className={getButtonStyle(item)}
            onClick={() => setPage(item)}
          >
            {item}
          </div>
        );
      })}
      <div
        className={styles.page}
        onClick={nextPage}
      >
        <ArrowIcon direction={'right'}/>
      </div>
      <div
        className={styles.page}
        onClick={() => setPage(totalPages)}
      >
        <DoubleArrowIcon direction={'right'}/>
      </div>
    </div>
  );
};

export default PaginationPanel;
