import React from 'react';
import style from './ModalShare.module.scss';
import FilmInfoList from '../filmContent/filmInfo/filmInfoWatchParams/filmInfoList/FilmInfoList';
import { formatDurationFilm } from '../../hooks/helperFilm';
import { TParamListMovie } from '../../type/type';
import logoFile from './../../assests/svg/logoFile.svg';
import logoWhatsApp from './../../assests/svg/logoSocialWhatsApp.svg';
import logoSocialTelegram from './../../assests/svg/logoSocialTelegram.svg';
import logoSocialViber from './../../assests/svg/logoSocialViber.svg';
import logoSocialVK from './../../assests/svg/logoSocialVK.svg';
import logoSocialOK from './../../assests/svg/logoSocialOK.svg';
import logoSocialTwitter from './../../assests/svg/logoSocialTwitter.svg';
import ModalShareButton from './ModalShareButton';
import CrossButton from '../UI/crossButton/CrossButton';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

type TModalShareProps = {
  closeModal: () => void;
  poster: string;
  name: string;
  year: number;
  duration: number;
};

const ModalShare: React.FC<TModalShareProps> = ({ closeModal, poster, name, year, duration }) => {
  const location = useLocation();
  const params = useParams();
  const paramsYear: TParamListMovie = {
    title: String(year),
  };
  const paramsDuration: TParamListMovie = {
    title: formatDurationFilm(duration),
  };
  return (
    <div className={style.wrapper}>
      <div className={style.cross}>
        <CrossButton closeModal={closeModal} addingClass={style.cross_btn} />
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
          <ModalShareButton
            text="Копировать ссылку"
            logo={logoFile}
            onClick={() => {
              debugger;
              console.log(params);
              const copyText = window.location.href;
              navigator.clipboard.writeText(copyText);
              closeModal();
            }}
            href="#"
          />
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
