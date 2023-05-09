import React from 'react';
import style from './ModalShare.module.scss';
import logoCross from './../../assests/svg/logoCross.svg';
import FilmInfoList from '../filmContent/filmInfo/filmInfoList/FilmInfoList';
import { formatDurationFilm } from '../../hooks/helperFilm';
import { TParamListMovie } from '../../type/type';
import UIButton from '../UI/UIButton/UIButton';
import logoFile from './../../assests/svg/logoFile.svg';

type TModalShareButtonProps = {
  text: string;
  logo: string;
  href: string;
};

const ModalShareButton: React.FC<TModalShareButtonProps> = ({ text, logo, href }) => {
  return (
    <UIButton addingClass={style.button}>
      <p className={style.button_text}>{text}</p>
      <img className={style.button_img} src={logo} alt={text} />
    </UIButton>
  );
};

export default ModalShareButton;
