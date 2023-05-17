import { title } from 'process';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useGetOneFilmQuery } from '../../store/api/filmApi';
import { useGetOnePersonQuery } from '../../store/api/personApi';
import { IFilm } from '../../type/TFilm';
import { TPersonEnglishName, TPersonName } from '../../type/type';
import PersonItem from '../personItem/PersonItem';
import ReviewCardDate from '../reviewCard/ReviewCardDate';
import ReviewCardVote from '../reviewCard/ReviewCardVote';
import ButtonWithoutBgc from '../UI/buttonWithoutBgc/ButtonWithoutBgc';
import UILink from '../UI/Link/UILink';
import Spinner from '../UI/spinner/Spinner';
import style from './WatchReviews.module.scss';
import logoUser from './../../assests/svg/logoUser.svg';
import GreyButton from '../UI/greyButton/GreyButton';
import UIButton from '../UI/UIButton/UIButton';
import FormAddReview from '../formAddReview/FormAddReview';

type TWatchReviewItemProps = {
  filmId: number;
  reviewId: number;
  titleReview: string;
  textReview: string;
  rating: number;
  refetchFilms: () => void;
};

const WatchReviewItem: React.FC<TWatchReviewItemProps> = ({
  filmId,
  reviewId,
  titleReview,
  textReview,
  rating,
  refetchFilms,
}) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const { data: film } = useGetOneFilmQuery({ id: String(filmId) });
  // const reviewsBlock = useMemo(() => {
  //   return film?.reviews
  //     .map(({ id, title, text, rating, parentId }) => {
  //       if (!parentId) {
  //         return (
  //           <WatchReviewItem
  //             key={id}
  //             filmId={filmId}
  //             reviewId={id}
  //             titleReview={title}
  //             textReview={text}
  //             rating={rating}
  //             refetchFilms={refetch}
  //           />
  //         );
  //       }
  //     })
  //     .reverse();
  // }, [filmId, film?.reviews, refetch]);
  return (
    <div className={style.review}>
      <div className={style.review_header}>
        <div className={style.avatar}>
          <img className={style.avatar_logo} src={logoUser} alt="avatar" />
        </div>
        <div className={style.review_title}>{titleReview}</div>
        <div className={style.review_date}>
          <ReviewCardDate />
        </div>
        <div className={style.review_rate}>
          <ReviewCardVote rating={rating} />
        </div>
      </div>
      <div className={style.review_content}>
        <p className={style.review_text}>{textReview}</p>
      </div>
      {!isShowForm && (
        <button className={style.answer} onClick={() => setIsShowForm(true)}>
          Ответить
        </button>
      )}
      {isShowForm && (
        <FormAddReview
          filmId={filmId}
          forWhat="review"
          reviewId={reviewId}
          refetchFilms={refetchFilms}
        />
      )}
    </div>
  );
};

export default WatchReviewItem;
