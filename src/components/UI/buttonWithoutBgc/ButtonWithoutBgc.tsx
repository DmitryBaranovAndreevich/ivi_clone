import React, { ReactNode } from 'react';
import style from './ButtonWithoutBgc.module.scss';

type TButtonShowMoreProps = {
  onClick: () => void;
  children: ReactNode;
  addingClass?: string;
};

const ButtonWithoutBgc: React.FC<TButtonShowMoreProps> = ({ onClick, children, addingClass }) => {
  return (
    <button className={style.button + ' ' + addingClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonWithoutBgc;
