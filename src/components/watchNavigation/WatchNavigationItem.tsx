import React from 'react';
import UILink from '../UI/Link/UILink';
import style from './WatchNavigation.module.scss';

type TWatchNavigationItemProps = {
  href: string;
  title: string;
  count: number | null;
  filmId: number;
  activeLink: string;
};

const WatchNavigationItem: React.FC<TWatchNavigationItemProps> = ({
  href,
  title,
  count,
  filmId,
  activeLink,
}) => {
  return (
    <li className={`${style.item} ${activeLink === href && style.item_active}`}>
      <UILink href={`/watch/${filmId}/${href}`} title={title} addingClass={style.item_link} />
      <sup className={style.item_count}>{count}</sup>
    </li>
  );
};

export default WatchNavigationItem;
