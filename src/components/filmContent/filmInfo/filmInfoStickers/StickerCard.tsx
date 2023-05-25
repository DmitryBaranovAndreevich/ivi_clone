import React from 'react';
import RatingCard from '../RatingCard';
import style from './FilmInfoStickers.module.scss';

type TStickerCardProps = {
  type: 'actor' | 'rating';
  caption: string;
  rating?: string;
  avatar?: string;
  hover: string | null;
};

const StickerCard: React.FC<TStickerCardProps> = ({ type, rating, caption, avatar, hover }) => {
  return (
    <React.Fragment>
      <div className={`${style.content} ${hover === caption && style.content_hover}`}>
        {type === 'actor' ? (
          <img className={style.content_avatar} src={avatar} alt={caption} />
        ) : (
          <RatingCard rating={rating} addingClass={style.content_rating} />
        )}
      </div>
      <div className={`${style.caption} ${hover === caption && style.caption_hover}`}>
        {caption}
      </div>
    </React.Fragment>
  );
};

export default StickerCard;
