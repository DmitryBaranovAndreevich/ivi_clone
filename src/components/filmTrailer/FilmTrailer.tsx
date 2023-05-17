import React from 'react';
import CardTrailer from './CardTrailer';
import style from './FilmTrailer.module.scss';

type TFilmTrailerProps = {
  filmId: number;
  filmPoster: string;
  trailer: string;
};

const FilmTrailer: React.FC<TFilmTrailerProps> = ({ filmId, filmPoster, trailer }) => {
  return (
    <div className={style.trailer}>
      <div className={style.titleBlock}>
        <h2 className={style.title_underline}>Трейлеры</h2>
        <h2 className={style.title}>и доп. материалы</h2>
      </div>
      <div className={style.content}>
        <CardTrailer filmPoster={filmPoster} trailer={trailer} />
      </div>
    </div>
  );
};

export default FilmTrailer;
