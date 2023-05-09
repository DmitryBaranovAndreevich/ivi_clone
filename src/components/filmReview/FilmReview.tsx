import React, { useMemo } from 'react';
import ButtonWithoutBgc from '../UI/buttonWithoutBgc/ButtonWithoutBgc';
import style from './FilmReview.module.scss';
import logoHand from './../../assests/svg/logoHand.svg';
import ReviewCard from '../reviewCard/ReviewCard';
import { useNavigate } from 'react-router-dom';
import { IReviews } from '../../type/TReviews';

type TReviewCardProps = {
  filmId: number;
  nameFilm: string;
  review: Array<IReviews>;
  // title: string;
  // text?: string;
  // rating: number;
};

const FilmReview: React.FC<TReviewCardProps> = ({ filmId, nameFilm, review }) => {
  const navigate = useNavigate();
  const reviewsBlock = useMemo(() => {
    return review.map(({ id, title, text, rating }) => {
      return (
        <li className={style.reviews_item} key={id}>
          <ReviewCard filmId={filmId} titleReview={title} textReview={text} ratingReview={rating} />
        </li>
      );
    });
  }, [review, filmId]);
  return (
    <div className={style.reviewBlock}>
      <div className={style.header}>
        <div className={style.titleBlock}>
          <div className={style.titleBlock}>
            <h2 className={style.title}>Отзывы</h2>
          </div>
          <div className={style.subtitle}>о фильме «{nameFilm}»</div>
        </div>
        <ButtonWithoutBgc
          addingClass={style.showMore}
          onClick={() => navigate(`/watch/${filmId}/reviews`)}
        >
          Оставить отзыв
        </ButtonWithoutBgc>
      </div>
      <div className={style.reviews}>
        <ul className={style.reviews_list}>{reviewsBlock}</ul>
      </div>
    </div>
  );
};

export default FilmReview;
