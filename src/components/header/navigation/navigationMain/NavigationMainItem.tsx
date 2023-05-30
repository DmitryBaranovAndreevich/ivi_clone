import React from 'react';
import { NavLink } from 'react-router-dom';
import { TNavigationLaptopEnTitle, TNavigationLaptopTitle } from '../../../../type/type';
import style from './navigationMain.module.scss';

export type TNavigationMainItemProps = {
  href: string;
  title: TNavigationLaptopTitle | TNavigationLaptopEnTitle;
  logo: string;
  selectItem: TNavigationLaptopTitle | TNavigationLaptopEnTitle | null;
  setSelectItem: (title: TNavigationLaptopTitle | TNavigationLaptopEnTitle) => void;
};

const NavigationMainItem: React.FC<TNavigationMainItemProps> = ({
  href,
  title,
  logo,
  selectItem,
  setSelectItem,
}) => {
  return (
    <li
      className={`${style.list_item} ${selectItem === title && style.select}`}
      onClick={() => setSelectItem(title)}
    >
      <NavLink className={style.button} to={href}>
        <div className={style.bgc}></div>
        <img className={style.button_logo} src={logo} alt="OK" />
        <p className={style.button_text}>{title}</p>
      </NavLink>
    </li>
  );
};

export default NavigationMainItem;
