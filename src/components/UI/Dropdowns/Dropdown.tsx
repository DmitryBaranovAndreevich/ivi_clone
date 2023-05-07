import React from 'react';
import UIButton from '../UIButton/UIButton';
import style from './dropdown.module.scss';
import DropdownBlock from './DropdownBlock';
import logoTV from './../../../assests/svg/logoTV.svg';
import DropdownSlider from './DropdownSlider';
import { useAppSelector } from '../../../hooks/redux';
import { appApi, useGetCountriesQuery, useGetGenresQuery } from '../../../store/api/appApi';
import InfiniteSlider from '../../infiniteSlider/InfiniteSlider';
import { IFilm } from '../../../type/TFilm';

const MOCK_INFO = [
  'Новинки',
  'Подборки',
  'Рейтинг',
  'Трейлеры',
  'Что посмотреть',
  'Фильмы в HD',
  'Новинки подписки',
];

const Dropdown: React.FC = () => {
  const { data: genres } = useGetGenresQuery('');
  const { data: countries } = useGetCountriesQuery('');
  const { years } = useAppSelector((state) => state.appReducer);
  const { data } = appApi.useGetAllFilmsQuery('');

  return (
    <div className={style.dropdown}>
      <div className={style.dropdown_body}>
        <div className={style.dropdown_content}>
          <div className={style.dropdown_content_width}>
            <DropdownBlock title="Жанры" listItems={genres} />
          </div>
          <div className={style.dropdown_content_regular}>
            <DropdownBlock title="Страны" listItems={countries} />
            <DropdownBlock title="Годы" listItems={years} />
          </div>
          <div className={style.dropdown_content_regular}>
            <DropdownSlider listItems={MOCK_INFO} />
          </div>
        </div>
        <div className={style.adding}>
          <div className={style.adding_subscribe}>
            {data && (
              <>
                <InfiniteSlider items={data as IFilm[]} />
                <InfiniteSlider items={data as IFilm[]} rtl={true} />
                <InfiniteSlider items={data as IFilm[]} />
              </>
            )}
          </div>
          <UIButton href={'https://www.ivi.ru/pages/tvsmart/'} addingClass={style.adding_btn}>
            <img className={style.adding_btn_logo} src={logoTV} alt="logoTV" />
            Смотреть на SmartTV
          </UIButton>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
