import React, { ReactNode } from 'react';
import UIButton from '../UIButton/UIButton';
import style from './dropdown.module.scss';
import logoTV from './../../../assests/svg/logoTV.svg';
import { useAppSelector } from '../../../hooks/redux';
import { useGetCountriesQuery, useGetGenresQuery } from '../../../store/api/appApi';

type TDropdownProps = {
  children: ReactNode;
};

const Dropdown: React.FC<TDropdownProps> = ({ children }) => {
  return (
    <div className={style.dropdown}>
      <div className={style.dropdown_body}>{children}</div>
    </div>
  );
};

export default Dropdown;
