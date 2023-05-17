import React from 'react';
import style from './CrossButton.module.scss';
import logoCross from './../../../assests/svg/logoCross.svg';

type TCrossButtonProps = {
  closeModal: () => void;
  addingClass: string;
};

const CrossButton: React.FC<TCrossButtonProps> = ({ closeModal, addingClass }) => {
  return (
    <button className={`${style.cross} ${addingClass}`} onClick={closeModal}>
      <img className={style.cross_logo} src={logoCross} alt="cross" />
    </button>
  );
};

export default CrossButton;
