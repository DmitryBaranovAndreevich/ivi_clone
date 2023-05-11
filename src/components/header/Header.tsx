import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RedButton from '../UI/redButton/RedButton';
import logo from './../../assests/svg/logo.svg';
import logoSearch from './../../assests/svg/logoSearch.svg';
import logoBell from './../../assests/svg/logoBell.svg';
import logoUser from './../../assests/svg/logoUser.svg';
import style from './header.module.scss';
import Dropdown from '../UI/Dropdowns/Dropdown';
import NavigationContainer from './navigation/NavigationContainer';
import { TNavigationDesctopTitle } from '../../type/type';
import DropdownSubscribe from './dropdownSubscribe/DropdownSubscribe';
import DropdownFilms from './dropdownFilms/DropdownFilms';
import DropdownNotification from './dropdownNotification/DropdownNotification';
import DropdownProfile from './dropdownProfile/DropdownProfile';

export type TItemHovered = TNavigationDesctopTitle | 'Подписка' | 'Уведомление' | 'Профиль' | null;

const Header = () => {
  const [itemHovered, setItemHovered] = useState<TItemHovered>('Профиль');
  const onMouseLeave = () => setItemHovered(null);
  const onMouseEnter = (title: TItemHovered) => setItemHovered(title);
  debugger;
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
            <NavigationContainer setItemHovered={setItemHovered} />
          </div>
          <div className={style.content_combine}>
            <div
              onMouseEnter={() => onMouseEnter('Подписка')}
              className={style.content_button + ' ' + style.content_block}
            >
              <RedButton addingClass={style.content_button_btn} text="Смотреть 30 дней бесплатно" />
            </div>
            <div
              className={style.content_search + ' ' + style.content_block}
              onMouseEnter={onMouseLeave}
            >
              <button className={style.content_search_btn}>
                <img className={style.content_search_logo} src={logoSearch} alt="logoSearch" />
                Поиск
              </button>
            </div>
          </div>
          <div
            onMouseEnter={() => onMouseEnter('Уведомление')}
            className={style.content_notifications + ' ' + style.content_block}
          >
            <Link to="https://www.ivi.tv/profile/pull_notifications">
              <div className={style.content_notifications_logo}>
                <img src={logoBell} alt="logoBell" />
              </div>
            </Link>
          </div>
          <div
            onMouseEnter={() => onMouseEnter('Профиль')}
            className={style.content_avatar + ' ' + style.content_block}
          >
            <Link className={style.content_avatar_link} to="/profile/email">
              <div className={style.content_avatar_link_logo}>
                <img src={logoUser} alt="logoUser" />
              </div>
            </Link>
          </div>
        </div>
        <div
          className={`${style.dropdown} ${itemHovered && style.dropdown_visible} ${
            itemHovered === 'Уведомление' && style.dropdown_small
          }`}
          onMouseLeave={onMouseLeave}
        >
          <Dropdown>
            {(itemHovered === 'Фильмы' ||
              itemHovered === 'Сериалы' ||
              itemHovered === 'Мультфильмы') && <DropdownFilms />}
            {itemHovered === 'Подписка' && <DropdownSubscribe />}
            {itemHovered === 'Уведомление' && <DropdownNotification />}
            {itemHovered === 'Профиль' && <DropdownProfile />}
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
