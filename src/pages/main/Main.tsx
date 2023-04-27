import CategoriesSlider from '../../components/categoriesSlider/CategoriesSlider';
import Slider from '../../components/mainSlider/MainSlider';
import CardFilm from '../../components/cardFilm/cardFilm';
import styles from './Main.module.scss';
import example from './../../assests/example.jpg';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className={styles.container}>
      <h2>MainPage</h2>
      <Slider />
      {/* <div className={styles.wrapper}>
        <CategoriesSlider title={'Рекомендую посмотреть >'} size={'medium'} />
        <CategoriesSlider title={'(TOP 10) за неделю'} size={'big'} />
      </div> */}
      <CardFilm
        image={example}
        name="qwertyqqqqqqqfrgjhkl;jhvghbjnkml,"
        year={2022}
        country="qwerty"
        genre="qwerty"
      />
      <Outlet />
    </div>
  );
};

export default Main;
