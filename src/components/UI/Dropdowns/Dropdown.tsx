import React, { memo, ReactElement, ReactNode, useEffect, useMemo } from 'react';
import UILink from '../Link/UILink';
import style from './dropdown.module.scss';

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

const Dropdown = () => {
  const genresItems: Array<ReactNode> = useMemo((): Array<ReactNode> => {
    return MOCK_GENRES.map((genre: string): ReactNode => {
      return (
        <div key={genre}>
          <UILink addingClass={style.link} title={genre} href="#" />
        </div>
      );
    });
  }, [MOCK_GENRES]);

  return (
    <div className={style.dropdown}>
      <div className={style.dropdown_body}>
        <div className={style.dropdown_content}>
          <div>
            <h3>Жанры</h3>
            <div>{genresItems}</div>
          </div>
          <div>
            <h3>Страны</h3>
            <div>{MOCK_COUNTRY}</div>
          </div>
          <div>
            <h3>Годы</h3>
            <div>{MOCK_YEARS}</div>
          </div>
          <div className={style.notification}></div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
