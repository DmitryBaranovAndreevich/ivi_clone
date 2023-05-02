import React, { ReactNode, useMemo } from 'react';
import { TGenre } from '../../../type/type';
import UILink from '../Link/UILink';
import style from './dropdown.module.scss';

type TDropdownBlockProps = {
  title: string;
  listItems: Array<TGenre>;
};

const DropdownBlock: React.FC<TDropdownBlockProps> = ({ title, listItems }) => {
  const itemsBlock: Array<ReactNode> = useMemo((): Array<ReactNode> => {
    return listItems.map((item: TGenre): ReactNode => {
      return (
        <div className={style.block_items_item} key={item.id}>
          <UILink addingClass={style.link} title={item.name} href={`/movies/${item.englishName}`} />
        </div>
      );
    });
  }, [listItems]);
  return (
    <div className={style.block}>
      <h3 className={style.block_title}>{title}</h3>
      <div className={style.block_items}>{itemsBlock}</div>
    </div>
  );
};

export default DropdownBlock;
