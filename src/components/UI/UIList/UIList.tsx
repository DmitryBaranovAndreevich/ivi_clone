import React, { ReactNode, useMemo } from 'react';
import { TMockObj } from '../../footer/Footer';
import style from './UIList.module.scss';

type TDropdownBlockProps = {
  title: string;
  listItems: Array<TMockObj>;
};

const UIList: React.FC<TDropdownBlockProps> = ({ title, listItems }) => {
  const itemsBlock: Array<ReactNode> = useMemo((): Array<ReactNode> => {
    return listItems.map(({ title, href }: TMockObj): ReactNode => {
      return (
        <li className={style.block_item} key={title}>
          <a href={href}>title</a>
          {/* <UILink addingClass={style.link} title={item} href="#" /> */}
        </li>
      );
    });
  }, [listItems]);
  return (
    <div className={style.block}>
      <h3 className={style.block_title}>{title}</h3>
      <ul className={style.block_list}>{itemsBlock}</ul>
    </div>
  );
};

export default UIList;
