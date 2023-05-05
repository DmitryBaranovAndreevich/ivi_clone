import React, { ReactNode, useMemo, useState } from 'react';
import style from './FilmInfoDescription.module.scss';

type TFilmInfoDescriptionProps = {
  description: string;
};

const FilmInfoDescription: React.FC<TFilmInfoDescriptionProps> = ({ description }) => {
  const [isOpenFull, setIsOpenFull] = useState(false);
  const descriptionShort = description.slice(0, description.indexOf('.', 100));

  return (
    <div className={style.description}>
      <p className={style.description_text}>{isOpenFull ? description : descriptionShort}</p>
      {!isOpenFull && (
        <button className={style.description_button} onClick={() => setIsOpenFull(true)}>
          Детали о фильме
        </button>
      )}
    </div>
  );
};

export default FilmInfoDescription;
