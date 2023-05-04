import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import style from './UIButton.module.scss';

type TUIButtonProps = {
  children: ReactNode;
  href?: string;
  addingClass: string;
  target?: string;
  type?: 'button' | 'link';
};

const UIButton: React.FC<TUIButtonProps> = ({ href, children, addingClass, type, target }) => {
  return (
    <React.Fragment>
      {type === 'button' ? (
        <button className={style.btn + ' ' + addingClass}>{children}</button>
      ) : (
        <Link to={href ? href : '/'} className={style.btn + ' ' + addingClass} target={target}>
          {children}
        </Link>
      )}
    </React.Fragment>
  );
};

export default UIButton;
