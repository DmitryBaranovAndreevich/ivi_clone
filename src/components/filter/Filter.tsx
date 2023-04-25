import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { moviesFilter } from '../../store/reducers/MoviesFilter';
import style from './Filter.module.scss';
import FilterPlank from './FilterPlank/FilterPlank';
import FilterRange from './FilterRange/FilterRange';
import FilterText from './FilterText/FilterText';

const Filter = () => {
  const { genres, countries, years } = useAppSelector((state) => state.app);
  const { choosenGenres, choosenCountries, choosenYears } = useAppSelector(
    (state) => state.moviesFilter
  );
  const dispatch = useAppDispatch();
  const { setGenres, setCountries, setYears } = moviesFilter.actions;
  return (
    <div className={style.filter}>
      <div className={style.checkboxBlock}>
        <FilterPlank
          title="Жанры"
          nameInitialValue="genre"
          listItem={genres}
          choosenValue={choosenGenres}
          addingClass={style.dropdown_genre}
          setFilter={(genres: Array<string>) => {
            dispatch(setGenres({ genres }));
          }}
        />
        <FilterPlank
          title="Страны"
          nameInitialValue="country"
          choosenValue={choosenCountries}
          listItem={countries}
          addingClass={style.dropdown_country}
          setFilter={(countries: Array<string>) => {
            dispatch(setCountries({ countries }));
          }}
        />
        <FilterPlank
          title="Годы"
          nameInitialValue="year"
          choosenValue={choosenYears}
          listItem={years}
          addingClass={style.dropdown_year}
          setFilter={(years: Array<string>) => {
            dispatch(setYears({ years }));
          }}
        />
      </div>
      <div className={style.textBlock}>
        <FilterText title="Актер" nameInitialValue="actor" setFilter={() => {}} />
        <FilterText title="Режиссер" nameInitialValue="director" setFilter={() => {}} />
      </div>
      <div className={style.rangeBlock}>
        <FilterRange title="Актер" nameInitialValue="actor" setFilter={() => {}} />
      </div>
    </div>
  );
};

export default Filter;
