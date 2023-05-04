import { FC } from 'react';
import { IFilm, appApi } from '../../store/api/appApi';
import CategoriesSlider, { ISlider } from '../categoriesSlider/CategoriesSlider';
import { Link } from 'react-router-dom';
import styles from './mainPageSlider.module.scss';
import Spinner from '../UI/spinner/Spinner';

interface IMainPageSlider extends ISlider {
  genre: string;
}

const MainPageSlider: FC<IMainPageSlider> = ({ genre, title, size }) => {
  const { data, isLoading } = appApi.useGetMoviesOfGenreQuery(genre);
  return (
    <div className={styles.container}>
      <Link className={styles.title} to="#">
        {title}
      </Link>
      {isLoading ? (
        <div className={styles.spinner}>
          <Spinner size={'big'} />
        </div>
      ) : (
        <CategoriesSlider title={title} size={size} items={data as IFilm[]} />
      )}
    </div>
  );
};

export default MainPageSlider;
