import React from 'react';
import style from './ModalShare.module.scss';
import logoCross from './../../assests/svg/logoCross.svg';
import FilmInfoList from '../filmContent/filmInfo/filmInfoList/FilmInfoList';
import { formatDurationFilm } from '../../hooks/helperFilm';
import { TParamListMovie } from '../../type/type';
import UIButton from '../UI/UIButton/UIButton';
import logoFile from './../../assests/svg/logoFile.svg';
import logoWhatsApp from './../../assests/svg/logoSocialWhatsApp.svg';
import logoSocialTelegram from './../../assests/svg/logoSocialTelegram.svg';
import logoSocialViber from './../../assests/svg/logoSocialViber.svg';
import logoSocialVK from './../../assests/svg/logoSocialVK.svg';
import logoSocialOK from './../../assests/svg/logoSocialOK.svg';
import logoSocialTwitter from './../../assests/svg/logoSocialTwitter.svg';
import ModalShareButton from './ModalShareButton';

type TModalReviewProps = {
  closeModal: () => void;
  poster: string;
  name: string;
  year: number;
  duration: number;
};

const ModalShare: React.FC<TModalReviewProps> = ({ closeModal, poster, name, year, duration }) => {
  const paramsYear: TParamListMovie = {
    title: String(year),
  };
  const paramsDuration: TParamListMovie = {
    title: formatDurationFilm(duration),
  };
  return (
    <div className={style.wrapper}>
      <div className={style.cross}>
        <button className={style.cross_btn} onClick={closeModal}>
          <img className={style.cross_logo} src={logoCross} alt="cross" />
        </button>
      </div>
      <div className={style.header}>
        <div className={style.imageBlock}>
          <img className={style.imageBlock_poster} src={poster} alt={name} />
        </div>
        <div className={style.textBlock}>
          <h4 className={style.title}>{name}</h4>
          <div className={style.params}>
            <FilmInfoList
              paramsList={[paramsYear, paramsDuration]}
              modify="withDot"
              addingClass={style.list}
            />
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className={`${style.content_group}`}>
          <ModalShareButton text="Копировать ссылку" logo={logoFile} href="#" />
        </div>
        <div className={`${style.content_group} ${style.content_group_big}`}>
          <ModalShareButton text="WhatsApp" logo={logoWhatsApp} href="#" />
          <ModalShareButton text="Telegram" logo={logoSocialTelegram} href="#" />
          <ModalShareButton text="Viber" logo={logoSocialViber} href="#" />
        </div>
        <div className={`${style.content_group} ${style.content_group_big}`}>
          <ModalShareButton text="Вконтакте" logo={logoSocialVK} href="#" />
          <ModalShareButton text="Одноклассники" logo={logoSocialOK} href="#" />
          <ModalShareButton text="Twitter" logo={logoSocialTwitter} href="#" />
        </div>
      </div>
    </div>
  );
};

export default ModalShare;