import React from 'react';
import RedButton from '../UI/redButton/RedButton';
import style from './FilmAllDevices.module.scss';
import allDevices from './../../assests/allDevices.png';
import ipad from './../../assests/ipad.png';
import Line from '../login/Line/Line';
import { Link } from 'react-router-dom';

type TFilmAllDevicesProps = {
  filmPoster: string;
  title: string;
};

const FilmAllDevices: React.FC<TFilmAllDevicesProps> = ({ filmPoster, title }) => {
  return (
    <div className={style.devices}>
      <div className={style.textBlock}>
        <h2 className={style.title}>Cмотреть «{title}» на всех устройствах</h2>
        <p className={style.text}>
          Приложение доступно для скачивания на iOS, Android, SmartTV и приставках
        </p>
        <Link className={style.link} to="https://www.ivi.tv/devices">
          <RedButton addingClass={style.button} text="Подключить устройства" />
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
