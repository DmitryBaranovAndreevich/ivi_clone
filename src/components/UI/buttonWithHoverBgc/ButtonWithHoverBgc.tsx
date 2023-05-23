import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import style from './ButtonWithHoverBgc.module.scss';

type TButtonWithHoverBgcProps = {
  title: string;
  addingClass: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
};

const ButtonWithHoverBgc: React.FC<TButtonWithHoverBgcProps> = ({
  title,
  addingClass,
  type,
  onClick,
}) => {
  return (
    <div className={style.wrapper + ' ' + addingClass}>
      <button className={style.button} onClick={onClick} type={type}>
        {title}
        <span className={style.line}></span>
      </button>
    </div>
  );
};

export default ButtonWithHoverBgc;
