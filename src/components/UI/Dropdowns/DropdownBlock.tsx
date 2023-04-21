import React, { ReactNode, useMemo } from 'react';
import UILink from '../Link/UILink';
import style from './dropdown.module.scss';

type TDropdownBlockProps = {
  title: string;
  listItems: Array<string>;
};

const DropdownBlock: React.FC<TDropdownBlockProps> = ({ title, listItems }) => {
  const itemsBlock: Array<ReactNode> = useMemo((): Array<ReactNode> => {
    return listItems.map((item: string): ReactNode => {
      return (
        <div className={style.block_items_item} key={item}>
          <UILink addingClass={style.link} title={item} href="#" />
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
