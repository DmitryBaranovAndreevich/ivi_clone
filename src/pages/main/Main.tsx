import Slider from '../../components/mainSlider/MainSlider';
import styles from './Main.module.scss';
import { NavLink, Outlet } from 'react-router-dom';
import MainPageSlider from '../../components/mainPageSlider/MainPageSlider';
import { appApi } from '../../store/api/appApi';
import Spinner from '../../components/UI/spinner/Spinner';
import { IFilm } from '../../type/TFilm';
import { useTranslation } from 'react-i18next';

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
          <NavLink to="/admin/films">ссылка</NavLink>
          <Slider items={data as IFilm[]} />
          <div className={styles.wrapper}>
            <MainPageSlider genre={'fantasy'} size={'medium'} title={t('genre.fantasy')} />
            <MainPageSlider genre={'action'} size={'big'} title={t('genre.action')} />
            <MainPageSlider genre={'adventure'} size={'medium'} title={t('genre.adventure')} />
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Main;
