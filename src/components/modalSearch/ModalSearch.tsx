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
import CrossButton from '../UI/crossButton/CrossButton';
import ModalSearchForm from './ModalSearchForm';

type TModalSearchProps = {
  closeModal: () => void;
  poster: string;
  name: string;
  year: number;
  duration: number;
};

const ModalSearch: React.FC<TModalSearchProps> = ({ closeModal, poster, name, year, duration }) => {
  const paramsYear: TParamListMovie = {
    title: String(year),
  };
  const paramsDuration: TParamListMovie = {
    title: formatDurationFilm(duration),
  };
  return (
    <div className={style.wrapper}>
      <CrossButton closeModal={closeModal} addingClass={style.cross} />
      <h2 className={style.title}>Поиск</h2>
      <ModalSearchForm />
    </div>
  );
};

export default ModalSearch;
