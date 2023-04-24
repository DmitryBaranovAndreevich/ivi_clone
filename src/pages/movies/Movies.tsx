import CategoriesSlider from '../../components/categoriesSlider/CategoriesSlider';
import Slider from '../../components/mainSlider/MainSlider';
import CardFilm from '../../components/cardFilm/cardFilm';
import styles from './Movies.module.scss';
import example from './../../assests/example.jpg';
import FilterMovies from '../../components/filterMovies/FilterMovies';

const Movies = () => {
  return (
    <div className={styles.container}>
      <h2>Movies page</h2>
      <FilterMovies />
    </div>
  );
};

export default Movies;
