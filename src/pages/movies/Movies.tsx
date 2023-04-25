import styles from './Movies.module.scss';
import Filter from '../../components/filter/Filter';

const Movies = () => {
  return (
    <div className={styles.container}>
      <h2>Movies page</h2>
      <Filter />
    </div>
  );
};

export default Movies;
