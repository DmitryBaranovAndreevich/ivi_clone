import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { TObjWithParamsUrl } from '../../hooks/useNavigation';
import { useGetCountriesQuery, useGetGenresQuery } from '../../store/api/appApi';
import style from './Filter.module.scss';
import FilterPlank from './FilterPlank/FilterPlank';
import FilterRange from './FilterRange/FilterRange';
import FilterText from './FilterText/FilterText';

type TFilterProps = {
  meanUrl: TObjWithParamsUrl;
};

const Filter: React.FC<TFilterProps> = ({ meanUrl }) => {
  const { data: genres } = useGetGenresQuery('');
  const { data: countries } = useGetCountriesQuery('');
  const { years } = useAppSelector((state) => state.appReducer);
  const navigate = useNavigate();

  return (
    <div className={style.filter}>
      <div className={`${style.filter_block} ${style.checkboxBlock}`}>
        <FilterPlank
          title="Жанры"
          nameInitialValue="genre"
          listItem={genres}
          choosenValue={meanUrl}
          addingClass={style.dropdown_genre}
        />
        <FilterPlank
          title="Страны"
          nameInitialValue="country"
          choosenValue={meanUrl}
          listItem={countries}
          addingClass={style.dropdown_country}
        />
        <FilterPlank
          title="Годы"
          nameInitialValue="year"
          choosenValue={meanUrl}
          listItem={years}
          addingClass={style.dropdown_year}
        />
      </div>
      <div className={`${style.filter_block} ${style.textBlock}`}>
        <FilterText title="Актер" nameInitialValue="actor" setFilter={() => {}} />
        <FilterText title="Режиссер" nameInitialValue="director" setFilter={() => {}} />
      </div>
      <div className={`${style.filter_block} ${style.rangeBlock}`}>
        <FilterRange title="Рейтинг" nameInitialValue="rate" step={0.1} min={0} max={10} />
        <FilterRange
          title="Количесво отзывов"
          nameInitialValue="countReviews"
          step={0.1}
          min={0}
          max={10}
        />
      </div>
      <div className={style.clear}>
        <button className={style.clear_button} onClick={() => navigate('/movies')}>
          <div className={style.clear_cross}></div>
          Сбросить фильтр
        </button>
      </div>
    </div>
  );
};

export default Filter;
