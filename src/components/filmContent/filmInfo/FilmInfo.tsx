import React, { useState } from 'react';
import { formatDurationFilm } from '../../../hooks/helperFilm';
import { TParamListMovie } from '../../../type/type';
import style from './FilmInfo.module.scss';
import logoSound from './../../../assests/svg/logoSound.svg';
import FilmInfoStickers from './filmInfoStickers/FilmInfoStickers';
import FilmInfoDescription from './filmInfoDescription/FilmInfoDescription';
import FilmInfoRating from './filmInfoRating/FilmInfoRating';
import { IActors, ICountries, IGenres } from '../../../type/TFilm';
import FilmInfoList from './filmInfoList/FilmInfoList';

type TFilmInfoProps = {
  name: string;
  year: number;
  duration: number;
  mpaaRating: string;
  countries: Array<ICountries>;
  genre: Array<IGenres>;
  actors: Array<IActors>;
  rating: number;
  description: string;
};

const FilmInfo: React.FC<TFilmInfoProps> = ({
  name,
  year,
  duration,
  mpaaRating,
  countries,
  genre,
  actors,
  rating,
  description,
}) => {
  const [country] = useState(countries.length > 0 ? countries[0].name : '');
  const paramsYear: TParamListMovie = {
    title: String(year),
    link: `/movies/${year}`,
  };
  const paramsDuration: TParamListMovie = {
    title: formatDurationFilm(duration),
  };
  const paramsMpaaRating: TParamListMovie = {
    title: mpaaRating,
  };
  const paramsCountry: TParamListMovie = {
    title: country,
    link: `/movies/${country}`,
  };
  const paramsGenre: Array<TParamListMovie> = genre.slice(0, 3).map((genre: IGenres) => ({
    title: genre.name,
    link: `/movies/${genre.englishName}`,
  }));
  const paramsQuality: TParamListMovie = {
    title: 'FullHD',
    type: 'likeButton',
  };
  const paramsLanguage: TParamListMovie = {
    title: 'Рус',
    icon: logoSound,
  };
  return (
    <div className={style.info}>
      <div className={style.titleBlock}>
        <h2 className={style.titleBlock_title}>{name}</h2>
      </div>
      <div className={`${style.paramsBlock} ${style.block}`}>
        <FilmInfoList paramsList={[paramsYear, paramsDuration, paramsMpaaRating]} />
        <FilmInfoList paramsList={[paramsCountry, ...paramsGenre]} modify="withDot" />
        <FilmInfoList paramsList={[paramsQuality, paramsLanguage]} />
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
