import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './MainPageDescription.module.scss';

const MainPageDescription: React.FC = () => {
  const { t } = useTranslation();
  const [isFullInfo, setIsFillInfo] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.header}>
          <h2 className={style.header_title}>{t('main.description.title')}</h2>
        </div>
        <div className={style.content}>
          {/* <div className={style.content}> */}
          <p>{t('main.description.about')}</p>
          {isFullInfo && (
            <>
              <p>{t('main.description.problems')}</p>
              <p>{t('main.description.onlainIviFull')}</p>
              <p>{t('main.description.onlainIvishort')}</p>
              <ul className={style.list}>
                <li>{t('main.description.list.first')}</li>
                <li>{t('main.description.list.second')}</li>
                <li>{t('main.description.list.third')}</li>
                <li>{t('main.description.list.four')}</li>
              </ul>
              <p>
                {t('main.description.update')}
                <a className={style.link} href="/movies/comedy">
                  {t('genre.comedy')}
                </a>
                ,&nbsp;
                <a className={style.link} href="/movies/action">
                  {t('genre.action')}
                </a>
                ,&nbsp;
                <a className={style.link} href="/movies/horror">
                  {t('genre.adventure')}
                </a>
                ,&nbsp;
                <a className={style.link} href="/movies/thriller">
                  {t('genre.thriller')}&nbsp;
                </a>{' '}
                {t('main.description.genreEnd')}
              </p>
              <p>{t('main.description.openAbility')}</p>
              <p>{t('main.description.watchEasy')}</p>
            </>
          )}
        </div>
        {!isFullInfo && (
          <span className={style.showMore} onClick={() => setIsFillInfo(true)}>
            {t('main.description.expand')}
          </span>
        )}
        {isFullInfo && (
          <span className={style.showMore} onClick={() => setIsFillInfo(false)}>
            {t('main.description.collapse')}
          </span>
        )}
      </div>
    </div>
  );
};

export default MainPageDescription;
