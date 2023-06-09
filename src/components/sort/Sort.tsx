import React, { useEffect, useState } from 'react';
import style from './sort.module.scss';
import logoSort from './../../assests/svg/logoSort.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import ArrowButton from '../UI/arrowButton/arrowButton';
import SortDropdown from './sortDropdown/sortDropdown';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useSearchParams } from 'react-router-dom';
import { moviesSort, TKindSort } from '../../store/reducers/MoviesSort';
import { useTranslation } from 'react-i18next';

const Sort = () => {
  const { i18n } = useTranslation();
  const { choosenSort, kindsSort } = useAppSelector((state) => state.moviesSortReduser);
  const dispatch = useAppDispatch();
  const { setSort } = moviesSort.actions;
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { buttonElement, dropdownElement } = useClickOutside(isOpen, setIsOpen);
  const setSortWithParams = (sortValue: TKindSort) => {
    dispatch(setSort({ sortValue }));
    setSearchParams({ sort: sortValue.href });
  };
  useEffect(() => {
    kindsSort.map(({ title, enTitle, href }: TKindSort) => {
      searchParams.get('sort') &&
        searchParams.get('sort') === href &&
        setSortWithParams({ title, enTitle, href });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={style.sortBlock}>
      <div ref={buttonElement} className={style.sorting} onClick={() => setIsOpen(!isOpen)}>
        <img className={style.sorting_logo} src={logoSort} alt="logoSort" />
        <p className={style.sorting_title}>
          {i18n.language === 'ru' ? choosenSort.title : choosenSort.enTitle}
        </p>
        <ArrowButton isOpen={isOpen} addingClass={style.sorting_arrow} />
      </div>
      <div ref={dropdownElement}>
        {isOpen && (
          <SortDropdown
            kindsSort={kindsSort}
            setSortWithParams={setSortWithParams}
            choosenSort={choosenSort}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Sort;
