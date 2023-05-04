import React, { ReactNode, useMemo } from 'react';
import { TGenreCountriesYears } from '../../../type/type';
import UILink from '../Link/UILink';
import style from './dropdown.module.scss';

type TDropdownBlockProps = {
  title: 'Жанры' | 'Страны' | 'Годы';
  listItems: Array<TGenreCountriesYears> | undefined;
};

const DropdownBlock: React.FC<TDropdownBlockProps> = ({ title, listItems }) => {
  const itemsBlock: Array<ReactNode> | undefined = useMemo((): Array<ReactNode> | undefined => {
    if (title === 'Годы' || title === 'Страны') {
      return listItems?.slice(0, 4).map((item: TGenreCountriesYears): ReactNode => {
        return (
          <div className={style.block_items_item} key={item.id}>
            <UILink
              addingClass={style.link}
              title={title === 'Годы' ? `Фильмы ${item.name} года` : item.name}
              href={`/movies/${item.englishName}`}
            />
          </div>
        );
      });
    } else {
      return listItems?.map((item: TGenreCountriesYears): ReactNode => {
        return (
          <div className={style.block_items_item} key={item.id}>
            <UILink
              addingClass={style.link}
              title={item.name}
              href={`/movies/${item.englishName}`}
            />
          </div>
        );
      });
    }
  }, [listItems]);
  return (
    <div className={style.block}>
      <h3 className={style.block_title}>{title}</h3>
      <div className={style.block_items}>{itemsBlock}</div>
    </div>
  );
};

export default DropdownBlock;
