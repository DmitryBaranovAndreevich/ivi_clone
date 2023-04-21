import React, { useMemo } from 'react';
import UIList from '../UI/UIList/UIList';
import style from './footer.module.scss';

export type TMockObj = {
  title: string;
  href: string;
};

const MOCK_ABOUT: Array<TMockObj> = [
  { title: 'О компании', href: 'https://corp.ivi.ru/' },
  { title: 'Вакансии', href: 'https://corp.ivi.ru/career/#career-vacancy-block' },
  { title: 'Программа бета-тестирования', href: 'https://www.ivi.tv/pages/beta' },
  { title: 'Информация для партнёров', href: 'https://www.ivi.tv/info/partners' },
  { title: 'Размещение рекламы', href: 'https://corp.ivi.ru/advertisers/' },
  { title: 'Пользовательское соглашение', href: 'https://www.ivi.tv/info/agreement' },
  { title: 'Политика конфиденциальности', href: 'https://www.ivi.tv/info/confidential' },
  { title: 'Комплаенс', href: 'https://www.ivi.tv/info/goryachaya-liniya-komplaens' },
];

const MOCK_SECTION: Array<TMockObj> = [
  { title: 'Мой Иви', href: 'https://www.ivi.tv/' },
  { title: 'Что нового', href: 'https://www.ivi.tv/new' },
  { title: 'Фильмы', href: '#' },
  { title: 'Сериалы', href: 'https://www.ivi.tv/series' },
  { title: 'Мультфильмы', href: 'https://www.ivi.tv/animation' },
  { title: 'Что посмотреть', href: 'https://www.ivi.tv/goodmovies' },
];

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <UIList title={'О нас'} listItems={MOCK_ABOUT} />
      </div>
    </footer>
  );
};

export default Footer;
