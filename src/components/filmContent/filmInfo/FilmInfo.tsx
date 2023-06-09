import React from 'react';
import style from './FilmInfo.module.scss';
import FilmInfoStickers from './filmInfoStickers/FilmInfoStickers';
import FilmInfoDescription from './filmInfoDescription/FilmInfoDescription';
import FilmInfoRating from './filmInfoRating/FilmInfoRating';
import { IActors, ICountries, IGenres } from '../../../type/TFilm';
import FilmInfoWatchParams from './filmInfoWatchParams/FilmInfoWatchParams';
import FilmTitleBlock from './filmTitleBlock/FilmTitleBlock';

type TFilmInfoProps = {
  name: string;
  originalName: string;
  year: number;
  duration: number;
  mpaaRating: string;
  countries: Array<ICountries>;
  genre: Array<IGenres>;
  actors: Array<IActors>;
  rating: string;
  description: string;
};

const FilmInfo: React.FC<TFilmInfoProps> = ({
  name,
  originalName,
  year,
  duration,
  mpaaRating,
  countries,
  genre,
  actors,
  rating,
  description,
}) => {
  return (
    <div className={style.info}>
      <div className={style.desktop}>
        <FilmTitleBlock name={name} originalName={originalName} />
        <div className={`${style.paramsBlock} ${style.block}`}>
          <FilmInfoWatchParams
            year={year}
            duration={duration}
            mpaaRating={mpaaRating}
            countries={countries}
            genre={genre}
          />
        </div>
      </div>
      <div className={`${style.stickersBlock} ${style.block}`}>
        <FilmInfoStickers actors={actors} rating={rating} />
      </div>
      <div className={`${style.descriptionBlock} ${style.block}`}>
        <FilmInfoDescription description={description} />
      </div>
      <div className={`${style.ratingBlock} ${style.block}`}>
        <FilmInfoRating rating={rating} />
      </div>
      {/* <div>
        <div></div>
        <button></button>
      </div>
      <div>
        <div>8.1</div>
        <div className="ratingMobile__textBlock">
          <div className="ratingMobile__title">Рейтинг Иви</div>
          <div className="ratingMobile__subtitle">Интересный сюжет</div>
          <div className="ratingMobile__extra">203 197 оценок</div>
        </div>
        <div>
          <button>Оценить</button>
        </div>
      </div> */}
    </div>
  );
};

export default FilmInfo;
