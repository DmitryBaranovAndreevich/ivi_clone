import React from 'react';
import style from './WatchExtraPage.module.scss';
import logoClock from './../../assests/svg/logoClock.svg';
import CardFilmRating from '../cardFilm/cardFilmRating';
import CardFilmDuration from '../cardFilm/cardFilmDuration';
import { Link } from 'react-router-dom';

type TWatchExtraAsideProps = {
  filmId: number;
  poster: string;
  filmName: string;
  rating: string;
  year: number;
  country: string;
  genre: string;
  duration: number;
};

const WatchExtraAside: React.FC<TWatchExtraAsideProps> = ({
  filmId,
  poster,
  filmName,
  rating,
  duration,
}) => {
  return (
    <div className={style.aside}>
      <div className={style.imageBlock}>
        <Link to={`/watch/${filmId}`}>
          <img className={style.imageBlock_img} src={poster} alt={filmName} />
        </Link>
      </div>
      <div className={style.textBlock}>
        <CardFilmRating rating={rating} />
        <CardFilmDuration>
          <img className={style.duration_logo} src={logoClock} alt="logoClock" />
          <p className={style.duration_text}>{duration} мин.</p>
        </CardFilmDuration>
      </div>
    </div>
  );
};

export default WatchExtraAside;
