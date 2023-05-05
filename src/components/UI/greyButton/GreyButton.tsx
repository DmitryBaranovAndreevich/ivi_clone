import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import style from './GreyButton.module.scss';

type TGreyButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  addingClass: string;
};

const GreyButton: React.FC<TGreyButtonProps> = ({ onClick, children, addingClass }) => {
  return (
    <React.Fragment>
      <button className={style.btn + ' ' + addingClass} onClick={onClick}>
        {children}
      </button>
    </React.Fragment>
  );
};

export default GreyButton;
