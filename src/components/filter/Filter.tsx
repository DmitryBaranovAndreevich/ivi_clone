import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { moviesFilter } from '../../store/reducers/MoviesFilter';
import style from './Filter.module.scss';
import FilterPlank from './FilterPlank/FilterPlank';
import FilterRange from './FilterRange/FilterRange';
import FilterText from './FilterText/FilterText';

const Filter = () => {
  debugger;
  const { genres, countries, years } = useAppSelector((state) => state.appReducer);
  const { choosenGenres, choosenCountries, choosenYears, choosenRate, choosenCountReview } =
    useAppSelector((state) => state.moviesFilterReduser);
  const dispatch = useAppDispatch();
  const { setGenres, setCountries, setYears, setRate, setCountReview, resetAllValue } =
    moviesFilter.actions;
  return (
    <div className={style.filter}>
      <div className={`${style.filter_block} ${style.checkboxBlock}`}>
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
      <div className={`${style.filter_block} ${style.textBlock}`}>
        <FilterText title="Актер" nameInitialValue="actor" setFilter={() => {}} />
        <FilterText title="Режиссер" nameInitialValue="director" setFilter={() => {}} />
      </div>
      <div className={`${style.filter_block} ${style.rangeBlock}`}>
        <FilterRange
          title="Рейтинг"
          choosenRate={choosenRate}
          nameInitialValue="rate"
          step={0.1}
          min={0}
          max={10}
          setFilter={(rate: number) => {
            dispatch(setRate({ rate }));
          }}
        />
        <FilterRange
          title="Количесво отзывов"
          choosenRate={choosenCountReview}
          nameInitialValue="countReviews"
          step={0.1}
          min={0}
          max={10}
          setFilter={(countReview: number) => {
            dispatch(setCountReview({ countReview }));
          }}
        />
      </div>
      <div className={style.clear}>
        <button className={style.clear_button} onClick={() => dispatch(resetAllValue())}>
          <div className={style.clear_cross}></div>
          Сбросить фильтр
        </button>
      </div>
    </div>
  );
};

export default Filter;
