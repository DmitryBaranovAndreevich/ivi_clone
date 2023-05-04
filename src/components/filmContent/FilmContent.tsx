import React from 'react';
import FilmInfo from './filmInfo/FilmInfo';
import Player from './player/Player';
import style from './FilmContent.module.scss';
import films from './films.json';
import { IFilm } from './TFilm';

const FilmContent = () => {
  const film: IFilm = films;
  return (
    <div className={style.filmContent}>
      <Player poster={film.poster} />
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
