import React from 'react';
import style from './DropdownFilms.module.scss';
import { useAppSelector } from '../../../hooks/redux';
import { useGetCountriesQuery, useGetGenresQuery } from '../../../store/api/appApi';
import DropdownBlock from './DropdownBlock';
import DropdownSlider from './DropdownSlider';
import UIButton from '../../UI/UIButton/UIButton';
import logoTV from './../../../assests/svg/logoTV.svg';

const MOCK_INFO = [
  'Новинки',
  'Подборки',
  'Рейтинг',
  'Трейлеры',
  'Что посмотреть',
  'Фильмы в HD',
  'Новинки подписки',
];

const DropdownFilms: React.FC = () => {
  const { data: genres } = useGetGenresQuery('');
  const { data: countries } = useGetCountriesQuery('');
  const { years } = useAppSelector((state) => state.appReducer);
  return (
    <>
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
        <div className={style.adding_subscribe}></div>
        <UIButton href={'https://www.ivi.ru/pages/tvsmart/'} addingClass={style.adding_btn}>
          <img className={style.adding_btn_logo} src={logoTV} alt="logoTV" />
          Смотреть на SmartTV
        </UIButton>
      </div>
    </>
  );
};

export default DropdownFilms;
