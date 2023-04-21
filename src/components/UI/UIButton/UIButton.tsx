import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import style from './UIButton.module.scss';

type TUIButtonProps = {
  children: ReactNode;
  href: string;
  addingClass: string;
};

const UIButton: React.FC<TUIButtonProps> = ({ href, children, addingClass }) => {
  return (
    <Link to={href} className={style.btn + ' ' + addingClass}>
      {children}
    </Link>
  );
};

export default UIButton;
