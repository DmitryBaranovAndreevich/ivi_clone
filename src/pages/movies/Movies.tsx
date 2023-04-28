import styles from './Movies.module.scss';
import Filter from '../../components/filter/Filter';
import Sort from '../../components/sort/Sort';

const Movies = () => {
  return (
    <div className={styles.container}>
      <h2>Movies page</h2>
      <Sort />
      <Filter />
    </div>
  );
};

export default Movies;
