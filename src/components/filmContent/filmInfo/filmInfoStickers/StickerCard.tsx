import React from 'react';
import RatingCard from '../RatingCard';
import style from './FilmInfoStickers.module.scss';

type TStickerCardProps = {
  type: 'actor' | 'rating';
  caption: string;
  rating?: number;
  avatar?: string;
};

const StickerCard: React.FC<TStickerCardProps> = ({ type, rating, caption, avatar }) => {
  return (
    <React.Fragment>
      <div className={style.content}>
        {type === 'actor' ? (
          <img className={style.content_avatar} src={avatar} alt={caption} />
        ) : (
          <RatingCard rating={rating} addingClass={style.content_rating} />
        )}
      </div>
      <div className={style.caption}>{caption}</div>
    </React.Fragment>
  );
};

export default StickerCard;
