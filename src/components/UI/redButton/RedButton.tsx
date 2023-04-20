import React from 'react';
import style from './redButton.module.scss';

type TRedButtonProps = {
  addingClass: string;
  text: string;
};

const RedButton: React.FC<TRedButtonProps> = ({ addingClass, text }) => {
  return <button className={style.btn + ' ' + addingClass}>{text}</button>;
};

export default RedButton;
