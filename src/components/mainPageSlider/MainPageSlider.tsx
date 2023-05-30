import { FC } from 'react';
import { appApi } from '../../store/api/appApi';
import CategoriesSlider, { ISlider } from '../categoriesSlider/CategoriesSlider';
import { Link } from 'react-router-dom';
import styles from './mainPageSlider.module.scss';
import Spinner from '../UI/spinner/Spinner';
import { IFilm } from '../../type/TFilm';

interface IMainPageSlider extends ISlider {
  genre: string;
}

const MainPageSlider: FC<IMainPageSlider> = ({ genre, title, size }) => {
  const { data, isLoading } = appApi.useGetMoviesOfGenreQuery(genre);
  if (isLoading) {
    return (
      <div className={styles.spinner}>
        <Spinner size={'big'} />
      </div>
    );
  }
  return (
    <>
      {data && (
        <div className={styles.container}>
          <Link className={styles.title} to="#">
            {title}
          </Link>
          <CategoriesSlider title={title} size={size} items={data as IFilm[]} />
        </div>
      )}
    </>
  );
};

export default MainPageSlider;
