import React, { useState } from 'react';
import style from './FilmInfoDescription.module.scss';
import { useTranslation } from 'react-i18next';

type TFilmInfoDescriptionProps = {
  description: string;
};

const FilmInfoDescription: React.FC<TFilmInfoDescriptionProps> = ({ description }) => {
  const [isOpenFull, setIsOpenFull] = useState(false);
  const descriptionShort = description.slice(0, description.indexOf('.', 100));
  const { t } = useTranslation();

  return (
    <div className={style.description}>
      <p className={style.description_text}>{isOpenFull ? description : descriptionShort}</p>
      {!isOpenFull && (
        <button className={style.description_button} onClick={() => setIsOpenFull(true)}>
          {t('movie.details')}
        </button>
      )}
    </div>
  );
};

export default FilmInfoDescription;
