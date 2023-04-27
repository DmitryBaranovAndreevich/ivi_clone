import React, { useMemo } from 'react';
import { TKindSort } from '../../../store/reducers/MoviesSort';
import style from './../sortDropdown.module.scss';

type TSortDropdownProps = {
  kindsSort: Array<TKindSort>;
  setSortWithParams: (sortValue: TKindSort) => void;
};

const SortDropdown: React.FC<TSortDropdownProps> = ({ kindsSort, setSortWithParams }) => {
  const kindsList = useMemo(() => {
    const changeKindSort = ({ title, href }: TKindSort) => {
      setSortWithParams({ title, href });
    };
    return kindsSort.map(({ title, href }: TKindSort) => {
      return (
        <li key={href} onClick={() => changeKindSort({ title, href })}>
          {title}
        </li>
      );
    });
  }, [kindsSort, setSortWithParams]);
  return <ul>{kindsList}</ul>;
};

export default SortDropdown;
