import React from 'react';
import FilmInfo from './filmInfo/FilmInfo';
import Player from './player/Player';
import style from './FilmContent.module.scss';
import { IFilm } from '../../type/TFilm';

type TFilmContentProps = {
  film: IFilm;
};

const FilmContent: React.FC<TFilmContentProps> = ({ film }) => {
  // const film: IFilm = films;
  return (
    <div className={style.filmContent}>
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
