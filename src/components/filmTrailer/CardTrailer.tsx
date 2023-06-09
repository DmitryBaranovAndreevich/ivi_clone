import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalTrailer from '../modalTrailer/ModalTrailer';
import UIModal from '../UI/modal/UIModal';
import style from './FilmTrailer.module.scss';

type TCardTrailerProps = {
  filmPoster: string;
  trailer: string;
};

const CardTrailer: React.FC<TCardTrailerProps> = ({ filmPoster, trailer }) => {
  const { t } = useTranslation();
  const [isTrailerModal, setIsTrailerModal] = useState(false);
  return (
    <div className={style.contentBlock} onClick={() => setIsTrailerModal(true)}>
      <div className={style.poster}>
        <img className={style.poster_img} src={filmPoster} />
      </div>
      <div className={style.textBlock}>
        <p className={style.subscription}>{t('movie.trailer')}</p>
      </div>
      {isTrailerModal && (
        <UIModal>
          <ModalTrailer trailer={trailer} closeModal={() => setIsTrailerModal(false)} />
        </UIModal>
      )}
    </div>
  );
};

export default CardTrailer;
