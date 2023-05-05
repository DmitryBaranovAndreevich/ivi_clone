import React, { ReactNode, useMemo, useState } from 'react';
import ButtonWithotBgc from '../../../UI/buttonWithoutBgc/ButtonWithoutBgc';
import UIButton from '../../../UI/UIButton/UIButton';
import RatingCard from '../RatingCard';
import style from './FilmInfoRating.module.scss';

type TFilmInfoDescriptionProps = {
  rating: number;
};

const FilmInfoRating: React.FC<TFilmInfoDescriptionProps> = ({ rating }) => {
  return (
    <UIButton type="button" addingClass={style.button}>
      <div className={style.block}>
        <RatingCard rating={rating} addingClass={style.rating} />
        <div className={style.caption}>Рейтинг Кинопоиск</div>
      </div>
      <ButtonWithotBgc addingClass={style.evaluateBtn} onClick={() => {}}>
        Оценить
      </ButtonWithotBgc>
    </UIButton>
  );
};

export default FilmInfoRating;
