import React from 'react';
import style from './arrowButton.module.scss';

type TArrowButtonProps = {
  isOpen: boolean;
  addingClass: string;
};

const ArrowButton: React.FC<TArrowButtonProps> = ({ isOpen, addingClass }) => {
  return <div className={`${style.button} ${addingClass} ${isOpen && style.button_open}`}></div>;
};

export default ArrowButton;
