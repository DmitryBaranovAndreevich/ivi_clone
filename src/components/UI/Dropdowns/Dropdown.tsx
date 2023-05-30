import React, { ReactNode } from 'react';
import style from './dropdown.module.scss';

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
