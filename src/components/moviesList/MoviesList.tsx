import React, { useMemo } from 'react';
import { IFilm } from '../../type/TFilm';
import CardFilm from '../cardFilm/cardFilm';
import style from './MoviesListBlock.module.scss';

type TMoviesListProps = {
  filmSort: Array<IFilm> | undefined;
};

const MoviesList: React.FC<TMoviesListProps> = ({ filmSort }) => {
  const filmsBlock = useMemo(() => {
    return filmSort?.map((film: IFilm) => {
      return (
        <li key={film.id} className={style.item}>
          <CardFilm
            filmId={film.id}
            name={film.name}
            enName={film.originalName}
            image={film.poster}
            duration={film.duration}
            rating={film.rating}
          />
        </li>
      );
    });
  }, [filmSort]);
  return (
    <div className={style.movies}>
      {filmsBlock ? (
        <ul className={style.list}>{filmsBlock}</ul>
      ) : (
        <p className={style.movies}>Фильмов не найдено</p>
      )}
    </div>
  );
};

export default MoviesList;
