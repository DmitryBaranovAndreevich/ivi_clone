import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RedButton from '../UI/redButton/RedButton';
import logo from './../../assests/svg/logo.svg';
import logoSearch from './../../assests/svg/logoSearch.svg';
import logoBell from './../../assests/svg/logoBell.svg';
import logoUser from './../../assests/svg/logoUser.svg';
import style from './header.module.scss';
import Navigation from './navigation/Navigation';
import Dropdown from '../UI/Dropdowns/Dropdown';

const Header = () => {
  const [itemHovered, setItemHovered] = useState<string | null>(null);

  return (
    <header className={style.header}>
      <div className={style.body}>
        <div className={style.content}>
          <div className={style.content_logo}>
            <Link className={style.content_logo_link + ' ' + style.content_block} to="/">
              <img src={logo} alt="film" />
            </Link>
          </div>
          <div className={style.content_menu}>
            <Navigation setItemHovered={setItemHovered} />
          </div>
          <div className={style.content_combine}>
            <div className={style.content_button + ' ' + style.content_block}>
              <RedButton addingClass={style.content_button_btn} text="Смотреть 30 дней бесплатно" />
            </div>
            <div className={style.content_search + ' ' + style.content_block}>
              <button className={style.content_search_btn}>
                <img className={style.content_search_logo} src={logoSearch} alt="logoSearch" />
                Поиск
              </button>
            </div>
          </div>
          <div className={style.content_notifications + ' ' + style.content_block}>
            <Link to="#">
              <div className={style.content_notifications_logo}>
                <img src={logoBell} alt="logoBell" />
              </div>
            </Link>
          </div>
          <div className={style.content_avatar + ' ' + style.content_block}>
            <Link className={style.content_avatar_link} to="#">
              <div className={style.content_avatar_link_logo}>
                <img src={logoUser} alt="logoUser" />
              </div>
            </Link>
          </div>
        </div>
        {itemHovered && (
          <div className={style.dropdown}>
            <Dropdown />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
