import React from 'react';
import { Link } from 'react-router-dom';
import style from './UILink.module.scss';

export type TNavigationItemProps = {
  href: string;
  title: string;
  addingClass: string;
};

const UILink: React.FC<TNavigationItemProps> = ({ href, title, addingClass }) => {
  return (
    <Link className={style.link + ' ' + addingClass} to={href}>
      {title}
    </Link>
  );
};

export default UILink;
