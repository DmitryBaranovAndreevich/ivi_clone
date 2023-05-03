import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetFilmsQuery } from '../../store/api/filmApi';
import CardFilm from '../cardFilm/cardFilm';
import { IFilm } from '../filmContent/TFilm';
import style from './MoviesList.module.scss';

const MoviesList = () => {
  const location = useLocation();
  const { data: filmSort } = useGetFilmsQuery(
    { pathName: location.pathname.replace(/\/movies/, ''), search: location.search },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const filmsBlock = useMemo(() => {
    return filmSort?.map((film: IFilm) => {
      return (
        <li key={film.id} className={style.item}>
          <CardFilm
            name={film.name}
            poster={film.poster}
            year={film.year}
            country={'Страна'}
            genre={'Жанр'}
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
