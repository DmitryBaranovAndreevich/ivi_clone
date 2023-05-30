import React from 'react';
import RedButton from '../UI/redButton/RedButton';
import style from './FilmAllDevices.module.scss';
import allDevices from './../../assests/allDevices.png';
import ipad from './../../assests/ipad.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type TFilmAllDevicesProps = {
  filmPoster: string;
  title: string;
};

const FilmAllDevices: React.FC<TFilmAllDevicesProps> = ({ filmPoster, title }) => {
  const { t } = useTranslation();
  return (
    <div className={style.devices}>
      <div className={style.textBlock}>
        <h2 className={style.title}>
          {t('movie.allDevices.look')} «{title}» {t('movie.allDevices.allDevices')}
        </h2>
        <p className={style.text}>{t('movie.allDevices.available')}</p>
        <Link className={style.link} to="https://www.ivi.tv/devices">
          <RedButton addingClass={style.button} text={t('movie.allDevices.connectDevice')} />
        </Link>
      </div>
      <div className={style.imageBlock}>
        <div className={style.imageBlock_content}>
          <img className={style.allDevices} src={allDevices} />
          <img className={style.ipad} src={ipad} />
          <div className={style.posterTV}>
            <img className={style.posterTV_img} src={filmPoster} />
          </div>
          <div className={style.posterIpad}>
            <img className={style.posterIpad_img} src={filmPoster} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmAllDevices;
