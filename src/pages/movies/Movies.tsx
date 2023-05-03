import styles from './Movies.module.scss';
import Filter from '../../components/filter/Filter';
import Sort from '../../components/sort/Sort';
import { useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useGetFilmsQuery } from '../../store/api/filmApi';
import CardFilm from '../../components/cardFilm/cardFilm';
import { IFilm } from '../../components/filmContent/TFilm';
import { useGetCountriesQuery, useGetGenresQuery } from '../../store/api/appApi';
import { useAppSelector } from '../../hooks/redux';
import { useNavigation } from '../../hooks/useNavigation';
import MoviesHeader from '../../components/moviesHeader/MoviesHeader';
import MoviesList from '../../components/moviesList/MoviesList';

const Movies = () => {
  const { data: genres } = useGetGenresQuery('');
  const { data: countries } = useGetCountriesQuery('');
  const { years } = useAppSelector((state) => state.appReducer);
  const meanUrl = useNavigation(genres, years, countries);

  return (
    <div className={styles.container}>
      <MoviesHeader meanUrl={meanUrl} />
      <Sort />
      <Filter meanUrl={meanUrl} />
      <MoviesList />
    </div>
  );
};

export default Movies;
