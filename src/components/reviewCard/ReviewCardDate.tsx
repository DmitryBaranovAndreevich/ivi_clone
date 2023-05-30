import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './ReviewCard.module.scss';

const ReviewCardDate = () => {
  const { i18n } = useTranslation();
  return (
    <div className={style.content_date}>
      4&nbsp;{i18n.language === 'ru' ? 'апреля' : 'april'}&nbsp;2023
    </div>
  );
};

export default ReviewCardDate;
