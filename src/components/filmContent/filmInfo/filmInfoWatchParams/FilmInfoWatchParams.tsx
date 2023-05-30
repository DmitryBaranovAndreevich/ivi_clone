import React, { useState } from 'react';
import logoSound from './../../../../assests/svg/logoSound.svg';
import { ICountries, IGenres } from '../../../../type/TFilm';
import FilmInfoList from './filmInfoList/FilmInfoList';
import { TParamListMovie } from '../../../../type/type';
import { formatDurationFilm } from '../../../../hooks/helperFilm';
import { useTranslation } from 'react-i18next';

type TFilmInfoWatchParamsProps = {
  year: number;
  duration: number;
  mpaaRating: string;
  countries: Array<ICountries>;
  genre: Array<IGenres>;
};

const FilmInfoWatchParams: React.FC<TFilmInfoWatchParamsProps> = ({
  year,
  duration,
  mpaaRating,
  countries,
  genre,
}) => {
  const { t, i18n } = useTranslation();
  const [country] = useState(
    countries.length > 0
      ? i18n.language === 'ru'
        ? countries[0].name
        : countries[0].englishName
      : ''
  );
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
    title: i18n.language === 'ru' ? genre.name : genre.englishName,
    link: `/movies/${genre.englishName}`,
  }));
  const paramsQuality: TParamListMovie = {
    title: 'FullHD',
    type: 'likeButton',
  };
  const paramsLanguage: TParamListMovie = {
    title: i18n.language === 'ru' ? 'Рус' : 'Ru',
    icon: logoSound,
  };
  return (
    <>
      <FilmInfoList paramsList={[paramsYear, paramsDuration, paramsMpaaRating]} />
      <FilmInfoList paramsList={[paramsCountry, ...paramsGenre]} modify="withDot" />
      <FilmInfoList paramsList={[paramsQuality, paramsLanguage]} />
    </>
  );
};

export default FilmInfoWatchParams;
