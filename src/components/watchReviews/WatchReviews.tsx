import { title } from 'process';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { number } from 'yup';
import { useAppSelector } from '../../hooks/redux';
import { useGetOneFilmQuery } from '../../store/api/filmApi';
import { useGetOnePersonQuery } from '../../store/api/personApi';
import { IReviews } from '../../type/TReviews';
import PersonItem from '../personItem/PersonItem';
import UILink from '../UI/Link/UILink';
import Spinner from '../UI/spinner/Spinner';
import style from './WatchReviews.module.scss';
import WatchReviewItem from './WatchReviewItem';
import WatchPersonType from './WatchReviewItem';
import FormAddReview from '../formAddReview/FormAddReview';

type TWatchReviewsProps = {
  filmId: number;
  reviews: Array<IReviews>;
};

const WatchReviews: React.FC<TWatchReviewsProps> = ({ filmId, reviews }) => {
  const reviewsBlock = useMemo(() => {
    return reviews.map(({ id, title, text, rating }) => {
      return <WatchReviewItem key={id} titleReview={title} textReview={text} rating={rating} />;
    });
  }, [reviews]);
  return (
    <div className={style.content}>
      <FormAddReview filmId={filmId} />
      {reviewsBlock}
    </div>
  );
};

export default WatchReviews;
