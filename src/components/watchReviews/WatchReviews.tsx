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

const WatchReviews: React.FC<TWatchReviewsProps> = ({ filmId }) => {
  const [reviewWithParent, setReviewWithParent] = useState<Array<IReviews>>([]);
  const { data: film, isLoading, isFetching, refetch } = useGetOneFilmQuery({ id: String(filmId) });
  const reviewsBlock = useMemo(() => {
    // film?.reviews
    //   .map((review) => {
    //     if (!review.parentId) {
    //       return (
    //         <WatchReviewItem
    //           key={review.id}
    //           filmId={filmId}
    //           reviewId={review.id}
    //           titleReview={review.title}
    //           textReview={review.text}
    //           rating={review.rating}
    //           refetchFilms={refetch}
    //         />
    //       );
    //     }
    //     // else {
    //     //   setReviewWithParent((prevState) => [...prevState, review]);
    //     // }
    //   })
    return film?.reviews
      .map((review) => {
        if (!review.parentId) {
          return (
            <WatchReviewItem
              key={review.id}
              filmId={filmId}
              reviewId={review.id}
              titleReview={review.title}
              textReview={review.text}
              rating={review.rating}
              refetchFilms={refetch}
            />
          );
        }
        // else {
        //   setReviewWithParent((prevState) => [...prevState, review]);
        // }
      })
      .reverse();
  }, [filmId, film?.reviews, refetch]);
  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner size={'big'} />
      </div>
    );
  }
  return (
    <div className={style.content}>
      <FormAddReview filmId={filmId} forWhat="film" refetchFilms={refetch} />
      {isFetching && (
        <div>
          <Spinner size={'small'} />
        </div>
      )}
      {reviewsBlock}
    </div>
  );
};

export default WatchReviews;
