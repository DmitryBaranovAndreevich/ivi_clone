import React from 'react';
import { Link } from 'react-router-dom';
import UIButton from '../UI/UIButton/UIButton';
import UIList from '../UI/UIList/UIList';
import style from './footer.module.scss';
import logoMail from '../../assests/svg/logoMail.svg';
import logoPhone from '../../assests/svg/logoPhone.svg';
import logoMegaphone from '../../assests/svg/logoMegaphone.svg';

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

const FooterTop = () => {
  return (
    <div className={style.content}>
      <div className={style.column}>
        <h3 className={style.title}>О нас</h3>
        <UIList listItems={MOCK_ABOUT} />
      </div>
      <div className={style.column}>
        <h3 className={style.title}>Разделы</h3>
        <UIList listItems={MOCK_SECTION} />
        <div className={style.setrificate}>
          <Link className={style.setrificate_link} to={'https://www.ivi.tv/cert'}>
            Активация сертификата
          </Link>
        </div>
      </div>
      <div className={style.column}>
        <h3 className={style.title}>Служба поддержки</h3>
        <div className={style.description}>
          <span>Мы всегда готовы вам помочь.</span>
          <span>Наши операторы онлайн 24/7</span>
        </div>
        <div className={style.support}>
          <UIButton href={'https://www.ivi.tv/profile'} addingClass={style.support_chat}>
            Написать в чате
          </UIButton>
          <div className={style.support_buttons}>
            <UIButton href={'mailto:support@ivi.ru'} addingClass={style.support_buttons_btn}>
              <img src={logoMail} />
            </UIButton>
            <UIButton href={'mailto:support@ivi.ru'} addingClass={style.support_buttons_btn}>
              <img src={logoPhone} />
            </UIButton>
          </div>
        </div>
        <div className={style.question}>
          <Link className={style.question_link} to="https://ask.ivi.ru/" target="_blank">
            ask.ivi.ru
          </Link>
          <span className={style.question_text}>Ответы на вопросы</span>
        </div>
      </div>
      <div className={style.column}>
        <div className={style.widget}>
          <div className={style.widget_icon}>
            <img src={logoMegaphone} alt={logoMegaphone} />
          </div>
          <p className={style.widget_text}>Смотрите фильмы, сериалы и мультфильмы без рекламы</p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
