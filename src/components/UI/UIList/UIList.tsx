import React, { ReactNode, useMemo } from 'react';
import { TMockObj } from '../../footer/Footer';
import UILink from '../Link/UILink';
import style from './UIList.module.scss';

type TUIListProps = {
  listItems: Array<TMockObj>;
};

const UIList: React.FC<TUIListProps> = ({ listItems }) => {
  const itemsBlock: Array<ReactNode> = useMemo((): Array<ReactNode> => {
    return listItems.map(({ title, href }: TMockObj): ReactNode => {
      return (
        <li className={style.block_item} key={title}>
          <UILink addingClass={style.link} title={title} href={href} />
        </li>
      );
    });
  }, [listItems]);
  return <ul className={style.block_list}>{itemsBlock}</ul>;
};

export default UIList;
