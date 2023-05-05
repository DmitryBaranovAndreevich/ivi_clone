import React from 'react';
import ButtonWithoutBgc from '../UI/buttonWithoutBgc/ButtonWithoutBgc';
import style from './ReviewCard.module.scss';
import logoHand from './../../assests/svg/logoHand.svg';

type TReviewCardProps = {
  title: string;
  text?: string;
};

const ReviewCard: React.FC<TReviewCardProps> = ({ title, text }) => {
  return (
    <div className={style.reviewBlock}>
      <div className={style.header}>
        <div className={style.titleBlock}>
          <div className={style.titleBlock}>
            <h2 className={style.title}>Актеры и создали</h2>
          </div>
          <div className={style.subtitle}></div>
        </div>
        <ButtonWithoutBgc addingClass={style.showMore} onClick={() => {}}>
          Оставить отзыв
        </ButtonWithoutBgc>
      </div>
      <div className={style.review}>
        <div className={style.content}>
          <div className={style.content_title}>{title}</div>
          <div className={style.content_text}>{text}</div>
          <div className={style.content_bottom}>
            <div className={style.content_date}>4&nbsp;апреля&nbsp;2023</div>
            <div className={style.vote}>
              <button className={`${style.vote_button} ${style.vote_like}`} type="button">
                <img
                  className={`${style.vote_img} ${style.vote_like_img}`}
                  src={logoHand}
                  alt="like"
                />
              </button>
              <div className={style.vote_value}>1</div>
              <button className={`${style.vote_button} ${style.vote_dislike}`} type="button">
                <img
                  className={`${style.vote_img} ${style.vote_dislike_img}`}
                  src={logoHand}
                  alt="dislike"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
