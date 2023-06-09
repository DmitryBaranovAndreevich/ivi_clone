import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { TObjWithParamsUrl } from '../../hooks/useNavigation';
import { useGetCountriesQuery, useGetGenresQuery } from '../../store/api/appApi';
import style from './Filter.module.scss';
import FilterPlank from './FilterPlank/FilterPlank';
import FilterRange from './FilterRange/FilterRange';
import FilterText from './FilterText/FilterText';
import { useTranslation } from 'react-i18next';

type TFilterProps = {
  meanUrl: TObjWithParamsUrl;
};

const Filter: React.FC<TFilterProps> = ({ meanUrl }) => {
  const { t } = useTranslation();
  const { data: genres } = useGetGenresQuery('');
  const { data: countries } = useGetCountriesQuery('');
  const { years } = useAppSelector((state) => state.appReducer);
  const navigate = useNavigate();
  const { maxRatingCountOfFilm } = useAppSelector((state) => state.moviesSortReduser);
  const [stepRatingNumber, setStepRatingNumber] = useState(0.1);
  useEffect(() => {
    const ratingCount = maxRatingCountOfFilm / 10000;
    if (ratingCount < 1) {
      const stringRatingCount = String(ratingCount);
      const stringTo = stringRatingCount.search(/[1-9]/i);
      const substringRatingCount = stringRatingCount.substring(0, stringTo + 1);
      const numberQ = +substringRatingCount;
      setStepRatingNumber(numberQ * 100);
    } else {
      setStepRatingNumber(Math.floor(ratingCount) * 100);
    }
  }, [maxRatingCountOfFilm]);

  return (
    <div className={style.filter}>
      <div className={`${style.filter_block} ${style.checkboxBlock}`}>
        <FilterPlank
          title={t('filter.genres')}
          nameInitialValue="genre"
          listItem={genres}
          choosenValue={meanUrl}
          addingClass={style.dropdown_genre}
        />
        <FilterPlank
          title={t('filter.countries')}
          nameInitialValue="country"
          choosenValue={meanUrl}
          listItem={countries}
          addingClass={style.dropdown_country}
        />
        <FilterPlank
          title={t('filter.years')}
          nameInitialValue="year"
          choosenValue={meanUrl}
          listItem={years}
          addingClass={style.dropdown_year}
        />
      </div>
      <div className={`${style.filter_block} ${style.textBlock}`}>
        <FilterText title={t('filter.actor')} nameInitialValue="actor" setFilter={() => {}} />
        <FilterText title={t('filter.director')} nameInitialValue="director" setFilter={() => {}} />
      </div>
      <div className={`${style.filter_block} ${style.rangeBlock}`}>
        <FilterRange
          title={t('filter.rating')}
          nameInitialValue="rate"
          step={0.1}
          min={0}
          max={10}
        />
        <FilterRange
          title={t('filter.reviews')}
          nameInitialValue="countReviews"
          step={stepRatingNumber}
          min={0}
          max={maxRatingCountOfFilm}
        />
      </div>
      <div className={style.clear}>
        <button className={style.clear_button} onClick={() => navigate('/movies')}>
          <div className={style.clear_cross}></div>
          {t('filter.reset')}
        </button>
      </div>
    </div>
  );
};

export default Filter;
