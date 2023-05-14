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
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userLoginSlice } from '../../store/reducers/UserLoginSlice';
import { eraseCookie } from '../../service/eraseCookie';

const Header = () => {
  const { setDefaultValue } = userLoginSlice.actions;
  const dispatch = useAppDispatch();
  const [itemHovered, setItemHovered] = useState<string | null>(null);
  const { isRegister } = useAppSelector((state) => state.userLoginReduser);

  const exitFromProfile = () => {
    dispatch(setDefaultValue());
    eraseCookie('token');
  };
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
            <Link to="https://www.ivi.tv/profile/pull_notifications">
              <div className={style.content_notifications_logo}>
                <img src={logoBell} alt="logoBell" />
              </div>
            </Link>
          </div>
          <div className={style.content_avatar + ' ' + style.content_block}>
            {isRegister ? (
              <RedButton
                addingClass={style.content_button_btn}
                text={'Выйти из профиля'}
                onClick={exitFromProfile}
              />
            ) : (
              <Link className={style.content_avatar_link} to="/profile/email">
                <div className={style.content_avatar_link_logo}>
                  <img src={logoUser} alt="logoUser" />
                </div>
              </Link>
            )}
          </div>
        </div>
        <div
          className={style.dropdown + ' ' + (itemHovered && style.dropdown_visible)}
          onMouseLeave={() => setItemHovered(null)}
        >
          <Dropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
function dispatch(arg0: { payload: undefined; type: 'login/setDefaultValue' }) {
  throw new Error('Function not implemented.');
}
