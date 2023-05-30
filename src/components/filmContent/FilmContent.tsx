import React from 'react';
import FilmInfo from './filmInfo/FilmInfo';
import Player from './player/Player';
import style from './FilmContent.module.scss';
import { IFilm } from '../../type/TFilm';
import FilmTitleBlock from './filmInfo/filmTitleBlock/FilmTitleBlock';
import FilmInfoWatchParams from './filmInfo/filmInfoWatchParams/FilmInfoWatchParams';
import { useTranslation } from 'react-i18next';

type TFilmContentProps = {
  film: IFilm;
};

const FilmContent: React.FC<TFilmContentProps> = ({ film }) => {
  debugger;
  const { i18n } = useTranslation();
  return (
    <div className={style.filmContent}>
      <div className={style.watch}>
        <FilmTitleBlock name={film.name} originalName={film.originalName} />
        <FilmInfoWatchParams
          year={film.year}
          duration={film.duration}
          mpaaRating={film.mpaaRating}
          countries={film.countries}
          genre={film.genres}
        />
      </div>
      <Player
        poster={film.poster}
        trailer={film.trailer}
        name={film.name}
        year={film.year}
        duration={film.duration}
      />
      <FilmInfo
        name={film.name}
        originalName={film.originalName}
        year={film.year}
        duration={film.duration}
        mpaaRating={film.mpaaRating}
        countries={film.countries}
        genre={film.genres}
        actors={film.actors}
        rating={film.rating}
        description={film.description}
      />
    </div>
  );
};

export default FilmContent;
