import React from 'react';
import { Link } from 'react-router-dom';
import UIButton from '../UI/UIButton/UIButton';
import UIList from '../UI/UIList/UIList';
import style from './footer.module.scss';
import logoMail from '../../assests/svg/logoMail.svg';
import logoPhone from '../../assests/svg/logoPhone.svg';
import logoMegaphone from '../../assests/svg/logoMegaphone.svg';
import { useTranslation } from 'react-i18next';

export type TMockObj = {
  title: string;
  href: string;
};

const FooterTop = () => {
  const { t } = useTranslation();

  const MOCK_ABOUT: Array<TMockObj> = [
    { title: t('footer.aboutCompany'), href: 'https://corp.ivi.ru/' },
    { title: t('footer.job'), href: 'https://corp.ivi.ru/career/#career-vacancy-block' },
    { title: t('footer.betaTesting'), href: 'https://www.ivi.tv/pages/beta' },
    { title: t('footer.partners'), href: 'https://www.ivi.tv/info/partners' },
    { title: t('footer.advertising'), href: 'https://corp.ivi.ru/advertisers/' },
    { title: t('footer.agreement'), href: 'https://www.ivi.tv/info/agreement' },
    { title: t('footer.policy'), href: 'https://www.ivi.tv/info/confidential' },
    { title: t('footer.compliance'), href: 'https://www.ivi.tv/info/goryachaya-liniya-komplaens' },
  ];

  const MOCK_SECTION: Array<TMockObj> = [
    { title: t('footer.ivi'), href: 'https://www.ivi.tv/' },
    { title: t('footer.whatNew'), href: 'https://www.ivi.tv/new' },
    { title: t('footer.films'), href: '#' },
    { title: t('footer.serials'), href: 'https://www.ivi.tv/series' },
    { title: t('footer.cartoons'), href: 'https://www.ivi.tv/animation' },
    { title: t('footer.whatToSee'), href: 'https://www.ivi.tv/goodmovies' },
  ];
  return (
    <div className={style.content}>
      <div className={style.column}>
        <h3 className={style.title}>{t('footer.about')}</h3>
        <UIList listItems={MOCK_ABOUT} />
      </div>
      <div className={style.column}>
        <h3 className={style.title}>{t('footer.sections')}</h3>
        <UIList listItems={MOCK_SECTION} />
        <div className={style.setrificate}>
          <Link className={style.setrificate_link} to={'https://www.ivi.tv/cert'}>
            {t('footer.activation')}
          </Link>
        </div>
      </div>
      <div className={style.column}>
        <h3 className={style.title}>{t('footer.supportService')}</h3>
        <div className={style.description}>
          <span>{t('footer.help')}</span>
          <span>{t('footer.operators')}</span>
        </div>
        <div className={style.support}>
          <UIButton href={'https://www.ivi.tv/profile'} addingClass={style.support_chat}>
            {t('footer.chat')}
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
          <span className={style.question_text}>{t('footer.answers')}</span>
        </div>
      </div>
      <div className={style.column}>
        <div className={style.widget}>
          <div className={style.widget_icon}>
            <img src={logoMegaphone} alt={logoMegaphone} />
          </div>
          <p className={style.widget_text}>{t('footer.withoutAds')}</p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
