import React from 'react';
import style from './WatchTrailer.module.scss';
import CardTrailer from '../filmTrailer/CardTrailer';

type TWatchTrailerProps = {
  filmId: number;
  filmPoster: string;
  filmTrailer: string;
};

const WatchTrailer: React.FC<TWatchTrailerProps> = ({ filmPoster, filmTrailer }) => {
  return (
    <div className={style.content}>
      <CardTrailer filmPoster={filmPoster} trailer={filmTrailer} />
    </div>
  );
};

export default WatchTrailer;
