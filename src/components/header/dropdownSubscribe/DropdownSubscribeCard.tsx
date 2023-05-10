import React from 'react';
import style from './DropdownSubscribe.module.scss';

type TDropdownSubscribeCardProps = {
  logo: string;
  text: string;
  onClick?: () => void;
};

const DropdownSubscribeCard: React.FC<TDropdownSubscribeCardProps> = ({ logo, text, onClick }) => {
  return (
    <div className={style.card} onClick={onClick}>
      <div className={style.card_logo}>
        <img className={style.card_logo_img} src={logo} alt={text} />
      </div>
      <p className={style.card_text}>{text}</p>
    </div>
  );
};

export default DropdownSubscribeCard;
