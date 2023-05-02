import FilmContent from '../../components/filmContent/FilmContent';
import styles from './Watch.module.scss';

const Watch = () => {
  return (
    <div className={styles.container}>
      <h2>Watch page</h2>
      <FilmContent />
    </div>
  );
};

export default Watch;
