import React from 'react';
import UIButton from '../../UI/UIButton/UIButton';
import logoPlay from './../../../assests/svg/logoPlay.svg';
import logoBookmark from './../../../assests/svg/logoBookmark.svg';
import logoBookmarkFill from './../../../assests/svg/logoBookmarkFill.svg';
import logoShare from './../../../assests/svg/logoShare.svg';
import logoFolder from './../../../assests/svg/logoFolder.svg';
import style from './Player.module.scss';

const PlayerAdding = () => {
  return (
    <div className={style.adding}>
      <UIButton href={'/'} addingClass={style.adding_btn}>
        <img className={`${style.logo} ${style.logo_withText}`} src={logoPlay} alt="play" />
        Трейлер
      </UIButton>
      <UIButton href={'/'} addingClass={style.adding_btn}>
        <img className={style.logo} src={logoBookmark} alt="bookmark" />
      </UIButton>
      <UIButton href={'/'} addingClass={style.adding_btn}>
        <img className={style.logo} src={logoShare} alt="share" />
      </UIButton>
      <UIButton href={'/'} addingClass={style.adding_btn}>
        <img
          className={`${style.logo} ${style.logo_withText}`}
          src={logoFolder}
          alt="free movies"
        />
        Бесплатные фильмы
      </UIButton>
    </div>
  );
};

export default PlayerAdding;
