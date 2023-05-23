import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardTrailer from './CardTrailer';
import style from './FilmTrailer.module.scss';

type TFilmTrailerProps = {
  filmId: number;
  filmPoster: string;
  trailer: string;
};

const FilmTrailer: React.FC<TFilmTrailerProps> = ({ filmId, filmPoster, trailer }) => {
  const navigate = useNavigate();
  return (
    <div className={style.trailer}>
      <div className={style.titleBlock}>
        <h2 className={style.title_underline} onClick={() => navigate(`/watch/${filmId}/trailer`)}>
          Трейлеры
        </h2>
        <h2 className={style.title}>&nbsp;и доп. материалы</h2>
      </div>
      <div className={style.content}>
        <CardTrailer filmPoster={filmPoster} trailer={trailer} />
      </div>
    </div>
  );
};

export default FilmTrailer;
