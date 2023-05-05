import React from 'react';
import UIButton from '../../UI/UIButton/UIButton';
import logoPlay from './../../../assests/svg/logoPlay.svg';
import logoBookmarkWidth from './../../../assests/svg/logoBookmarkWidth.svg';
// import logoBookmarkFill from './../../../assests/svg/logoBookmarkFill.svg';
import logoShare from './../../../assests/svg/logoShare.svg';
import logoFolder from './../../../assests/svg/logoFolder.svg';
import style from './Player.module.scss';
import GreyButton from '../../UI/greyButton/GreyButton';

const PlayerAdding = () => {
  return (
    <div className={style.adding}>
      <GreyButton onClick={() => {}} addingClass={style.adding_btn}>
        <img className={`${style.logo} ${style.logo_withText}`} src={logoPlay} alt="play" />
        Трейлер
      </GreyButton>
      <GreyButton onClick={() => {}} addingClass={style.adding_btn}>
        <img className={`${style.logo}`} src={logoBookmarkWidth} alt="play" />
      </GreyButton>
      <GreyButton onClick={() => {}} addingClass={style.adding_btn}>
        <img className={style.logo} src={logoShare} alt="share" />
      </GreyButton>
      <GreyButton onClick={() => {}} addingClass={style.adding_btn}>
        <img
          className={`${style.logo} ${style.logo_withText}`}
          src={logoFolder}
          alt="free movies"
        />
        Бесплатные фильмы
      </GreyButton>
    </div>
  );
};

export default PlayerAdding;
