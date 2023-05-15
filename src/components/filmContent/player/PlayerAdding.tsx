import React, { useState } from 'react';
import logoPlay from './../../../assests/svg/logoPlay.svg';
import logoBookmarkWidth from './../../../assests/svg/logoBookmarkWidth.svg';
import logoBookmarkFill from './../../../assests/svg/logoBookmarkFill.svg';
import logoShare from './../../../assests/svg/logoShare.svg';
import logoFolder from './../../../assests/svg/logoFolder.svg';
import style from './Player.module.scss';
import GreyButton from '../../UI/greyButton/GreyButton';
import UIModal from '../../UI/modal/UIModal';
import ModalShare from '../../modalShare/ModalShare';
import { useNavigate } from 'react-router-dom';
import ModalTrailer from '../../modalTrailer/ModalTrailer';

type TPlayerAddingProps = {
  poster: string;
  name: string;
  year: number;
  duration: number;
  trailer: string;
};

const PlayerAdding: React.FC<TPlayerAddingProps> = ({ poster, name, year, duration, trailer }) => {
  const [isShareModal, setIsShareModal] = useState(false);
  const [isTrailerModal, setIsTrailerModal] = useState(false);
  const [isInBookmark, setIsInBookmark] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={style.adding}>
      <GreyButton onClick={() => setIsTrailerModal(true)} addingClass={style.adding_btn}>
        <img className={`${style.logo} ${style.logo_withText}`} src={logoPlay} alt="trailer" />
        Трейлер
      </GreyButton>
      <GreyButton onClick={() => setIsInBookmark(!isInBookmark)} addingClass={style.adding_btn}>
        <img
          className={`${style.logo}`}
          src={isInBookmark ? logoBookmarkFill : logoBookmarkWidth}
          alt="bookmark"
        />
      </GreyButton>
      <GreyButton onClick={() => setIsShareModal(true)} addingClass={style.adding_btn}>
        <img className={style.logo} src={logoShare} alt="share" />
      </GreyButton>
      <GreyButton onClick={() => navigate('/movies')} addingClass={style.adding_btn}>
        <img
          className={`${style.logo} ${style.logo_withText}`}
          src={logoFolder}
          alt="free movies"
        />
        Бесплатные фильмы
      </GreyButton>
      {isShareModal && (
        <UIModal>
          <ModalShare
            closeModal={() => setIsShareModal(false)}
            poster={poster}
            name={name}
            year={year}
            duration={duration}
          />
        </UIModal>
      )}
      {isTrailerModal && (
        <UIModal>
          <ModalTrailer trailer={trailer} closeModal={() => setIsTrailerModal(false)} />
        </UIModal>
      )}
    </div>
  );
};

export default PlayerAdding;
