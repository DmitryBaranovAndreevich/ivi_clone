import React, { useState } from 'react';
import UIButton from '../../UI/UIButton/UIButton';
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

type TPlayerAddingProps = {
  poster: string;
  name: string;
  year: number;
  duration: number;
};

const PlayerAdding: React.FC<TPlayerAddingProps> = ({ poster, name, year, duration }) => {
  const [isShareModal, setIsShareModal] = useState(false);
  const [isInBookmark, setIsInBookmark] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={style.adding}>
      <GreyButton onClick={() => {}} addingClass={style.adding_btn}>
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
    </div>
  );
};

export default PlayerAdding;
