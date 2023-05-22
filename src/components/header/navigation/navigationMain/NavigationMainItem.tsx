import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TNavigationLaptopTitle } from '../../../../type/type';
import UIButton from '../../../UI/UIButton/UIButton';
import style from './navigationMain.module.scss';
import lightBackground from './../../../../assests/svg/lightBackground.svg';

export type TNavigationMainItemProps = {
  href: string;
  title: TNavigationLaptopTitle;
  logo: string;
  selectItem: TNavigationLaptopTitle | null;
  setSelectItem: (title: TNavigationLaptopTitle) => void;
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
