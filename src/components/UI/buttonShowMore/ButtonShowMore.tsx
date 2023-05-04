import React, { ReactNode } from 'react';
import style from './ButtonShowMore.module.scss';

type TButtonShowMoreProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  children: ReactNode;
};

const ButtonShowMore: React.FC<TButtonShowMoreProps> = ({
  currentPage,
  setCurrentPage,
  children,
}) => {
  return (
    <button className={style.button} onClick={() => setCurrentPage(currentPage + 1)}>
      {children}
    </button>
  );
};

export default ButtonShowMore;
