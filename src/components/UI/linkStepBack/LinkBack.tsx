import React from 'react';
import { Link } from 'react-router-dom';
import style from './LinkBack.module.scss';
import logoArrow from './../../../assests/svg/logoArrow.svg';

type TLinkBackProps = {
  href: string;
  text: string;
  onClick?: () => void;
};

const LinkBack: React.FC<TLinkBackProps> = ({ href, text, onClick }) => {
  return (
    <Link className={style.return} to={href} onClick={onClick}>
      <img className={style.return_logo} src={logoArrow} alt="arrow" />
      <div className={style.return_text}>{text}</div>
    </Link>
  );
};

export default LinkBack;
