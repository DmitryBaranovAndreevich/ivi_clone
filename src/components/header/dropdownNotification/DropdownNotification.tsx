import React from 'react';
import style from './DropdownNotification.module.scss';
import logoBell from './../../../assests/svg/logoBell.svg';

const DropdownNotification: React.FC = () => {
  return (
    <div className={style.content}>
      <div className={style.imageBlock}>
        <img className={style.imageBlock_img} src={logoBell} alt="bell" />
      </div>
      <p className={style.text}>Здесь появляются только важные события</p>
    </div>
  );
};

export default DropdownNotification;
