import React from 'react';
import style from './DropdownNotification.module.scss';
import logoBell from './../../../assests/svg/logoBell.svg';
import { useTranslation } from 'react-i18next';

const DropdownNotification: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={style.content}>
      <div className={style.imageBlock}>
        <img className={style.imageBlock_img} src={logoBell} alt="bell" />
      </div>
      <p className={style.text}>{t('dropdown.importantEvents')}</p>
    </div>
  );
};

export default DropdownNotification;
