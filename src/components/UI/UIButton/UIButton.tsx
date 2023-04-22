import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import style from './UIButton.module.scss';

type TUIButtonProps = {
  children: ReactNode;
  href: string;
  addingClass: string;
  target?: string;
};

const UIButton: React.FC<TUIButtonProps> = ({ href, children, addingClass, target }) => {
  return (
    <Link to={href} className={style.btn + ' ' + addingClass} target={target}>
      {children}
    </Link>
  );
};

export default UIButton;
