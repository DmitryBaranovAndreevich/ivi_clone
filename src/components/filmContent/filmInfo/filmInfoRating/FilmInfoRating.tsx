import React, { useState } from 'react';
import ModalReview from '../../../modalReview/ModalReview';
import ButtonWithotBgc from '../../../UI/buttonWithoutBgc/ButtonWithoutBgc';
import GreyButton from '../../../UI/greyButton/GreyButton';
import UIModal from '../../../UI/modal/UIModal';
import RatingCard from '../RatingCard';
import style from './FilmInfoRating.module.scss';
import { useTranslation } from 'react-i18next';

type TFilmInfoDescriptionProps = {
  rating: number;
};

const FilmInfoRating: React.FC<TFilmInfoDescriptionProps> = ({ rating }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <GreyButton onClick={() => setIsShowModal(true)} addingClass={style.button}>
        <div className={style.block}>
          <RatingCard rating={rating} addingClass={style.rating} />
          <div className={style.caption}>{t('movie.rating')}</div>
        </div>
        <ButtonWithotBgc addingClass={style.evaluateBtn} onClick={() => setIsShowModal(false)}>
          {t('movie.estimate')}
        </ButtonWithotBgc>
      </GreyButton>
      {isShowModal && (
        <UIModal>
          <ModalReview closeModal={() => setIsShowModal(false)} />
        </UIModal>
      )}
    </React.Fragment>
  );
};

export default FilmInfoRating;
