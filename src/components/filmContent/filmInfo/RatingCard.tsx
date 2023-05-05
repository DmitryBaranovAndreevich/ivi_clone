import React from 'react';
import style from './FilmInfo.module.scss';

type TRatingCardProps = {
  rating: number | undefined;
  addingClass: string;
};

const RatingCard: React.FC<TRatingCardProps> = ({ rating, addingClass }) => {
  return (
    <React.Fragment>
      <div className={style.rating + ' ' + addingClass}>
        <p className={style.rating_mean}>{rating}</p>
      </div>
    </React.Fragment>
  );
};

export default RatingCard;
