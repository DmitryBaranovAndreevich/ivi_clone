import React from 'react';
import { TNavigationDesctopEnTitle, TNavigationDesctopTitle } from '../../../../type/type';
import UILink from '../../../UI/Link/UILink';
import { TItemHovered } from '../../Header';
import style from './navigationDesktop.module.scss';

export type TNavigationDesktopItemProps = {
  href: string;
  title: TNavigationDesctopTitle | TNavigationDesctopEnTitle;
  isExpand: boolean;
  setItemHovered: (isHover: TItemHovered) => void;
};

const NavigationDesktopItem: React.FC<TNavigationDesktopItemProps> = ({
  href,
  title,
  isExpand,
  setItemHovered,
}) => {
  const onMouseLeave = () => setItemHovered(null);
  const onMouseEnter = () => setItemHovered(title);

  return (
    <li
      className={style.desktop_item}
      onMouseEnter={isExpand ? onMouseEnter : onMouseLeave}
      onMouseLeave={!isExpand ? onMouseLeave : undefined}
    >
      <UILink addingClass={style.desktop_link} title={title} href={href} />
    </li>
  );
};

export default NavigationDesktopItem;
