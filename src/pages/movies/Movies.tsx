import styles from './Movies.module.scss';
import Filter from '../../components/filter/Filter';
import Sort from '../../components/sort/Sort';
import { useGetCountriesQuery, useGetGenresQuery } from '../../store/api/appApi';
import { useAppSelector } from '../../hooks/redux';
import { useNavigation } from '../../hooks/useNavigation';
import MoviesHeader from '../../components/moviesHeader/MoviesHeader';
import MoviesListBlock from '../../components/moviesList/MoviesListBlock';
import BreadCrumbs from '../../components/UI/breadCrumbs/BreadCrumbs';
import { useEffect, useState } from 'react';
import { getArrayFromOneItem, TName } from '../../utils/helperFilmBreadCrumbs';
import { useTranslation } from 'react-i18next';

const Movies = () => {
  const { t } = useTranslation();
  const { data: genres } = useGetGenresQuery('');
  const { data: countries } = useGetCountriesQuery('');
  const { years } = useAppSelector((state) => state.appReducer);
  const meanUrl = useNavigation(genres, years, countries);
  const [meanBreadcrumbs, setMeanBreadcrumbs] = useState<Array<Array<TName>> | null>(null);
  useEffect(() => {
    const arrGenres = getArrayFromOneItem(genres, meanUrl.genre);
    const arrYears = getArrayFromOneItem(years, meanUrl.year);
    const arrCountries = getArrayFromOneItem(countries, meanUrl.country);
    setMeanBreadcrumbs([arrGenres, arrYears, arrCountries]);
  }, [genres, countries, years, meanUrl.genre, meanUrl.year, meanUrl.country]);

  return (
    <div className={styles.container}>
      <BreadCrumbs
        listParams={meanBreadcrumbs}
        constantMean={{ title: t('filter.title'), href: '/movies' }}
      />
      <MoviesHeader meanUrl={meanUrl} />
      <Sort />
      <Filter meanUrl={meanUrl} />
      <MoviesListBlock />
    </div>
  );
};

export default Movies;
