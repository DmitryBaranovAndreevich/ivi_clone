import React from 'react';
import ButtonWithoutBgc from '../UI/buttonWithoutBgc/ButtonWithoutBgc';
import style from './FilmReview.module.scss';
import logoHand from './../../assests/svg/logoHand.svg';
import ReviewCard from '../reviewCard/ReviewCard';

type TReviewCardProps = {
  nameFilm: string;
  title: string;
  text?: string;
};

const FilmReview: React.FC<TReviewCardProps> = ({ nameFilm, title, text }) => {
  return (
    <div className={style.reviewBlock}>
      <div className={style.header}>
        <div className={style.titleBlock}>
          <div className={style.titleBlock}>
            <h2 className={style.title}>Отзывы</h2>
          </div>
          <div className={style.subtitle}>о фильме «{nameFilm}»</div>
        </div>
        <ButtonWithoutBgc addingClass={style.showMore} onClick={() => {}}>
          Оставить отзыв
        </ButtonWithoutBgc>
      </div>
      <ReviewCard title={title} text={text} />
    </div>
  );
};

export default FilmReview;
