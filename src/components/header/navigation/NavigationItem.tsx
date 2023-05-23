import React from 'react';
import { TNavigationDesctopEnTitle, TNavigationDesctopTitle } from '../../../type/type';
import UILink from '../../UI/Link/UILink';
import { TItemHovered } from '../Header';
import style from './navigation.module.scss';

export type TNavigationItemProps = {
  href: string;
  title: TNavigationDesctopTitle | TNavigationDesctopEnTitle;
  isExpand: boolean;
  setItemHovered: (isHover: TItemHovered) => void;
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
      onMouseEnter={isExpand ? onMouseEnter : onMouseLeave}
      onMouseLeave={!isExpand ? onMouseLeave : undefined}
    >
      <UILink addingClass={style.list_item_link} title={title} href={href} />
    </li>
  );
};

export default NavigationItem;
