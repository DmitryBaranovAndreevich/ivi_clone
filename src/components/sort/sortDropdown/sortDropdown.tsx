import React, { useMemo } from 'react';
import { TKindSort } from '../../../store/reducers/MoviesSort';
import style from './sortDropdown.module.scss';

type TSortDropdownProps = {
  kindsSort: Array<TKindSort>;
  choosenSort: TKindSort;
  setSortWithParams: (sortValue: TKindSort) => void;
  setIsOpen: (isOpen: boolean) => void;
};

const SortDropdown: React.FC<TSortDropdownProps> = ({
  kindsSort,
  choosenSort,
  setSortWithParams,
  setIsOpen,
}) => {
  const kindsList = useMemo(() => {
    const changeKindSort = (kindSort: TKindSort) => {
      setSortWithParams(kindSort);
    };
    const onClick = (kindSort: TKindSort) => {
      changeKindSort(kindSort);
      setIsOpen(false);
    };
    return kindsSort.map((kindSort: TKindSort) => {
      return (
        <li
          className={`${style.item} ${choosenSort.title === kindSort.title && style.item_active}`}
          key={kindSort.href}
          onClick={() => onClick(kindSort)}
        >
          {kindSort.title}
        </li>
      );
    });
  }, [kindsSort, setSortWithParams, choosenSort, setIsOpen]);
  return (
    <div className={style.dropdown}>
      <div className={style.title}>Сортировать</div>
      <ul className={style.list}>{kindsList}</ul>
    </div>
  );
};

export default SortDropdown;
