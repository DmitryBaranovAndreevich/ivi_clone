import Slider from '../../components/mainSlider/MainSlider';
import styles from './Main.module.scss';
import { Outlet } from 'react-router-dom';
import MainPageSlider from '../../components/mainPageSlider/MainPageSlider';
import { IFilm, appApi } from '../../store/api/appApi';
import Spinner from '../../components/UI/spinner/Spinner';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

interface Error {
  error: string;
}

const Main = () => {
  const { data, isLoading, error } = appApi.useGetAllFilmsQuery('');
  console.log((error as FetchBaseQueryError)?.data);
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
            <MainPageSlider genre={'fantasy'} size={'medium'} title={'Фентези'} />
            <MainPageSlider genre={'action'} size={'big'} title={'Боевики'} />
            <MainPageSlider genre={'adventure'} size={'medium'} title={'Приключения'} />
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Main;
