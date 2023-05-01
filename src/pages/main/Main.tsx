import CategoriesSlider from '../../components/categoriesSlider/CategoriesSlider';
import Slider from '../../components/mainSlider/MainSlider';
import CardFilm from '../../components/cardFilm/cardFilm';
import styles from './Main.module.scss';
import example from './../../assests/example.jpg';
import { Outlet } from 'react-router-dom';
import { appApi } from '../../store/api/appApi';

const Main = () => {
  const { data: genres } = appApi.useGetGenresQuery('');
  return (
    <div className={styles.container}>
      <h2>MainPage</h2>
      <Slider />
      <div className={styles.wrapper}>
        {genres?.map((genre) => (
          <CategoriesSlider
            genre={genre}
            size={genre.name === 'боевик' ? 'big' : 'medium'}
            key={genre.id}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
