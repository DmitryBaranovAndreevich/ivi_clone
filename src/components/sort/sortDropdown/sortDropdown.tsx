import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t, i18n } = useTranslation();
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
          {i18n.language === 'ru' ? kindSort.title : kindSort.enTitle}
        </li>
      );
    });
  }, [kindsSort, setSortWithParams, choosenSort, setIsOpen, i18n.language]);
  return (
    <div className={style.dropdown}>
      <div className={style.title}>{t('filter.sort')}</div>
      <ul className={style.list}>{kindsList}</ul>
    </div>
  );
};

export default SortDropdown;
