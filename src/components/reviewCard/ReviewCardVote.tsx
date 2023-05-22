import React from 'react';
import style from './ReviewCard.module.scss';
import logoHand from './../../assests/svg/logoHand.svg';

type TReviewCardVoteProps = {
  rating: number;
};

const ReviewCardVote: React.FC<TReviewCardVoteProps> = ({ rating }) => {
  return (
    <div className={style.vote}>
      <button className={`${style.vote_button} ${style.vote_like}`} type="button">
        <img className={`${style.vote_img} ${style.vote_like_img}`} src={logoHand} alt="like" />
      </button>
      <div className={style.vote_value}>{rating}</div>
      <button className={`${style.vote_button} ${style.vote_dislike}`} type="button">
        <img
          className={`${style.vote_img} ${style.vote_dislike_img}`}
          src={logoHand}
          alt="dislike"
        />
      </button>
    </div>
  );
};

export default ReviewCardVote;
