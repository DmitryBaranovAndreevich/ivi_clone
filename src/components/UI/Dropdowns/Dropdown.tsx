import React, { memo, ReactElement, ReactNode, useEffect, useMemo } from 'react';
import UILink from '../Link/UILink';
import UIButton from '../UIButton/UIButton';
import style from './dropdown.module.scss';
import DropdownBlock from './DropdownBlock';
import logoTV from './../../../assests/svg/logoTV.svg';
import DropdownSlider from './DropdownSlider';

const MOCK_GENRES = [
  'Артхаус',
  'Биография',
  'Боевики',
  'Вестерн',
  'Военные',
  'Детективы',
  'Для всей семьи',
  'Для детей',
  'Документальные',
  'Драмы',
  'Исторические',
  'Катастрофы',
  'Комедии',
  'Криминал',
  'Мелодрамы',
  'Мистические',
  'Приключения',
  'Спорт',
  'Триллеры',
  'Ужасы',
  'Фантастика',
  'Фэнтези',
];

const MOCK_COUNTRY = ['Русские', 'Зарубежные', 'Советское кино'];

const MOCK_YEARS = ['Фильмы 2023 года', 'Фильмы 2022 года', 'Фильмы 2021 года', 'Фильмы 2020 года'];

const MOCK_INFO = [
  'Новинки',
  'Подборки',
  'Рейтинг',
  'Трейлеры',
  'Что посмотреть',
  'Фильмы в HD',
  'Новинки подписки',
];

const Dropdown = () => {
  return (
    <div className={style.dropdown}>
      <div className={style.dropdown_body}>
        <div className={style.dropdown_content}>
          <div className={style.dropdown_content_width}>
            <DropdownBlock title="Жанры" listItems={MOCK_GENRES} />
          </div>
          <div className={style.dropdown_content_regular}>
            <DropdownBlock title="Страны" listItems={MOCK_COUNTRY} />
            <DropdownBlock title="Годы" listItems={MOCK_YEARS} />
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
      </div>
    </div>
  );
};

export default Dropdown;
