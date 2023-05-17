import React, { useState } from 'react';
import ModalReview from '../../../modalReview/ModalReview';
import ButtonWithotBgc from '../../../UI/buttonWithoutBgc/ButtonWithoutBgc';
import GreyButton from '../../../UI/greyButton/GreyButton';
import UIModal from '../../../UI/modal/UIModal';
import RatingCard from '../RatingCard';
import style from './FilmInfoRating.module.scss';

type TFilmInfoDescriptionProps = {
  rating: number;
};

const FilmInfoRating: React.FC<TFilmInfoDescriptionProps> = ({ rating }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <React.Fragment>
      <GreyButton onClick={() => setIsShowModal(true)} addingClass={style.button}>
        <div className={style.block}>
          <RatingCard rating={rating} addingClass={style.rating} />
          <div className={style.caption}>Рейтинг Кинопоиск</div>
        </div>
        <ButtonWithotBgc addingClass={style.evaluateBtn} onClick={() => setIsShowModal(false)}>
          Оценить
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
