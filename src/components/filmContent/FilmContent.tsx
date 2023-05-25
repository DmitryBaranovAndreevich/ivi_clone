import React from 'react';
import FilmInfo from './filmInfo/FilmInfo';
import Player from './player/Player';
import style from './FilmContent.module.scss';
import { IFilm } from '../../type/TFilm';
import FilmTitleBlock from './filmInfo/filmTitleBlock/FilmTitleBlock';
import FilmInfoWatchParams from './filmInfo/filmInfoWatchParams/FilmInfoWatchParams';

type TFilmContentProps = {
  film: IFilm;
};

const FilmContent: React.FC<TFilmContentProps> = ({ film }) => {
  return (
    <div className={style.filmContent}>
      <div className={style.watch}>
        <FilmTitleBlock name={film.name} />
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
