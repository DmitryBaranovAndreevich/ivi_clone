import styles from './Movies.module.scss';
import Filter from '../../components/filter/Filter';
import Sort from '../../components/sort/Sort';
import { useGetCountriesQuery, useGetGenresQuery } from '../../store/api/appApi';
import { useAppSelector } from '../../hooks/redux';
import { useNavigation } from '../../hooks/useNavigation';
import MoviesHeader from '../../components/moviesHeader/MoviesHeader';
import MoviesListBlock from '../../components/moviesList/MoviesListBlock';
import ButtonWithHoverBgc from '../../components/UI/buttonWithHoverBgc/ButtonWithHoverBgc';
import DropdownFilms from '../../components/header/dropdownFilms/DropdownFilms';
import DropdownSubscribeCard from '../../components/header/dropdownSubscribe/DropdownSubscribeCard';
import logoCamera from './../../assests/svg/logoCamera.svg';

const Movies = () => {
  const { data: genres } = useGetGenresQuery('');
  const { data: countries } = useGetCountriesQuery('');
  const { years } = useAppSelector((state) => state.appReducer);
  const meanUrl = useNavigation(genres, years, countries);

  return (
    <div className={styles.container}>
      <DropdownSubscribeCard logo={logoCamera} text={'Новинки сериалов и фильмов'} />
      <MoviesHeader meanUrl={meanUrl} />
      <Sort />
      <Filter meanUrl={meanUrl} />
      <MoviesListBlock />
    </div>
  );
};

export default Movies;
