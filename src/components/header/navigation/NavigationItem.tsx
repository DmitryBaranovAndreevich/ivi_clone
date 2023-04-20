import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MoviesDropdown from '../../UI/Dropdowns/Dropdown';
import UILink from '../../UI/Link/UILink';
import style from './navigation.module.scss';

export type TNavigationItemProps = {
  href: string;
  title: string;
  isExpand: boolean;
  setItemHovered: (isHover: string | null) => void;
};

const NavigationItem: React.FC<TNavigationItemProps> = ({
  href,
  title,
  isExpand,
  setItemHovered,
}) => {
  const onMouseLeave = () => setItemHovered(null);
  const onMouseEnter = () => setItemHovered(title);

  return (
    <li
      className={style.list_item}
      onMouseEnter={isExpand ? onMouseEnter : undefined}
      onMouseLeave={isExpand ? onMouseLeave : undefined}
    >
      <UILink addingClass={style.list_item_link} title={title} href={href} />
    </li>
  );
};

export default NavigationItem;
