import React, { ReactNode, useMemo, useState } from 'react';
import UILink from '../../UI/Link/UILink';
import style from './DropdownFilms.module.scss';

type TDropdownBlockProps = {
  listItems: Array<string>;
};

const DropdownSlider: React.FC<TDropdownBlockProps> = ({ listItems }) => {
  const [active, setActive] = useState(0);

  const makeItemActive = (index: number) => {
    setActive(index);
  };

  const itemsBlock: Array<ReactNode> = useMemo((): Array<ReactNode> => {
    return listItems.map((item: string, index: number): ReactNode => {
      return (
        <div
          className={style.item + ' ' + (active === index && style.item_active)}
          key={item}
          onMouseEnter={() => makeItemActive(index)}
        >
          <UILink addingClass={style.link} title={item} href="#" />
        </div>
      );
    });
  }, [listItems, active]);
  return (
    <div className={style.block}>
      <div className={style.dropdown_content_line}></div>
      <div className={style.block_items}>{itemsBlock}</div>
    </div>
  );
};

export default DropdownSlider;
