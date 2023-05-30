import { FC } from 'react';
import styles from './movie.module.scss';
import { Link } from 'react-router-dom';
import { IFilmsList } from '../../../type/TFilm';
import { useTranslation } from 'react-i18next';

interface IMovie {
  data: IFilmsList;
}

const Movie: FC<IMovie> = ({ data }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={data.poster} alt="movies poster" className={styles.poster} />
        <div className={styles.description}>
          <p className={styles.year}>{data.year}</p>
          <p className={styles.name}>{i18n.language === 'ru' ? data.name : data.originalName}</p>
          <p className={styles.rating}>
            {t('movie.rating')}: {data.rating}
          </p>
        </div>
      </div>
      <Link to={`/watch/${data.id}`} className={styles.link}>
        {t('movie.watchBtn')}
      </Link>
    </div>
  );
};

export default Movie;
