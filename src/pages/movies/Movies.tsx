import styles from './Movies.module.scss';
import Filter from '../../components/filter/Filter';
import Sort from '../../components/sort/Sort';
import { useAppDispatch } from '../../hooks/redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { moviesFilter } from '../../store/reducers/MoviesFilter';

const Movies = () => {
  const dispatch = useAppDispatch();
  const { setGenres } = moviesFilter.actions;
  const params = useParams();
  useEffect(() => {
    if (params.genre) {
      dispatch(setGenres({ genres: [params.genre] }));
    }
  }, []);
  return (
    <div className={styles.container}>
      <h2>Movies page</h2>
      <Sort />
      <Filter />
    </div>
  );
};

export default Movies;
