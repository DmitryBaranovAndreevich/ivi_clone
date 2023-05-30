import Slider from '../../components/mainSlider/MainSlider';
import styles from './Main.module.scss';
import { Link, Outlet } from 'react-router-dom';
import MainPageSlider from '../../components/mainPageSlider/MainPageSlider';
import { appApi } from '../../store/api/appApi';
import Spinner from '../../components/UI/spinner/Spinner';
import { IFilm } from '../../type/TFilm';
import { useTranslation } from 'react-i18next';
import MainPageDescription from '../../components/mainPageDescription/MainPageDescription';
import CategoriesSlider from '../../components/categoriesSlider/CategoriesSlider';

interface Error {
  error: string;
}

const Main = () => {
  const { t } = useTranslation();
  const { data, isLoading, error } = appApi.useGetAllFilmsQuery('');
  return isLoading ? (
    <div className={styles.spinner}>
      <Spinner size={'big'} />
    </div>
  ) : (
    <div className={styles.container}>
      {error ? (
        <p className={styles.error}>{(error as Error).error}</p>
      ) : (
        <>
          <Slider items={data as IFilm[]} />
          <div className={styles.wrapper}>
            {data && (
              <div className={styles.container}>
                <Link className={styles.title} to="#">
                  {t('main.top')}
                </Link>
                <CategoriesSlider size={'medium'} items={data.slice(0, 10) as IFilm[]} />
              </div>
            )}
            <MainPageSlider genre={'fantasy'} size={'medium'} title={t('genre.fantasy') ?? ''} />
            <MainPageDescription />
            <MainPageSlider genre={'action'} size={'medium'} title={t('genre.action') ?? ''} />
            <MainPageSlider
              genre={'adventure'}
              size={'medium'}
              title={t('genre.adventure') ?? ''}
            />
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Main;
