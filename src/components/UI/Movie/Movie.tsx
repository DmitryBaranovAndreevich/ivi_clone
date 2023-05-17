import { FC } from 'react';
import { IFilm } from '../../filmContent/TFilm';
import styles from './movie.module.scss';
import { Link } from 'react-router-dom';

interface IMovie {
  data: IFilm;
}

const Movie: FC<IMovie> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={data.poster} alt="movies poster" className={styles.poster} />
        <div className={styles.description}>
          <p className={styles.year}>{data.year}</p>
          <p className={styles.name}>{data.name}</p>
          <p className={styles.rating}>Рйтинг иви: {data.rating}</p>
        </div>
      </div>
      <Link to={'#'} className={styles.link}>
        Смотреть
      </Link>
    </div>
  );
};

export default Movie;
