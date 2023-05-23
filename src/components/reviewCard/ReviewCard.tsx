import React from 'react';
import style from './ReviewCard.module.scss';
import ReviewCardVote from './ReviewCardVote';
import ReviewCardDate from './ReviewCardDate';
import { Link } from 'react-router-dom';

type TReviewCardProps = {
  filmId: number;
  titleReview: string;
  textReview: string;
  ratingReview: number;
};

const ReviewCard: React.FC<TReviewCardProps> = ({
  filmId,
  titleReview,
  textReview,
  ratingReview,
}) => {
  return (
    <Link className={style.review} to={`/watch/${filmId}/reviews`}>
      <div className={style.content}>
        <div className={style.content_title}>{titleReview}</div>
        <div className={style.content_text}>{textReview}</div>
        <div className={style.content_bottom}>
          <ReviewCardDate />
          <ReviewCardVote rating={ratingReview} />
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
