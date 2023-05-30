import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './FilmTitleBlock.module.scss';

type TFilmTitleBlockProps = {
  name: string;
  originalName: string;
};

const FilmTitleBlock: React.FC<TFilmTitleBlockProps> = ({ name, originalName }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={style.titleBlock}>
      <h2 className={style.titleBlock_title}>
        {t('movie.movie')} &quot;{i18n.language === 'ru' ? name : originalName}&quot;{' '}
        {t('movie.watchOnline')}
      </h2>
    </div>
  );
};

export default FilmTitleBlock;
