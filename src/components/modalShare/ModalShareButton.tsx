import React from 'react';
import style from './ModalShare.module.scss';
import UIButton from '../UI/UIButton/UIButton';

type TModalShareButtonProps = {
  text: string;
  logo: string;
  href: string;
  onClick?: () => void;
};

const ModalShareButton: React.FC<TModalShareButtonProps> = ({ text, logo, href, onClick }) => {
  return (
    <div onClick={onClick}>
      <UIButton addingClass={style.button} href={href}>
        <p className={style.button_text}>{text}</p>
        <img className={style.button_img} src={logo} alt={text} />
      </UIButton>
    </div>
  );
};

export default ModalShareButton;
