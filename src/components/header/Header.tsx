import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import RedButton from '../UI/redButton/RedButton';
import logo from './../../assests/svg/logo.svg';
import logoSearch from './../../assests/svg/logoSearch.svg';
import logoBell from './../../assests/svg/logoBell.svg';
import logoUser from './../../assests/svg/logoUser.svg';
import style from './header.module.scss';
import Dropdown from '../UI/Dropdowns/Dropdown';
import { TNavigationDesctopEnTitle, TNavigationDesctopTitle } from '../../type/type';
import DropdownSubscribe from './dropdownSubscribe/DropdownSubscribe';
import DropdownFilms from './dropdownFilms/DropdownFilms';
import DropdownNotification from './dropdownNotification/DropdownNotification';
import DropdownProfile from './dropdownProfile/DropdownProfile';
import ModalSearch from '../modalSearch/ModalSearch';
import UIModal from '../UI/modal/UIModal';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userLoginSlice } from '../../store/reducers/UserLoginSlice';
import { eraseCookie } from '../../service/eraseCookie';
import { useTranslation } from 'react-i18next';
import useAppMediaQuery from '../../hooks/useAppMediaQuery';
import NavigationDesktop from './navigation/navigationDesktop/NavigationDesktop';
import NavigationMain from './navigation/navigationMain/NavigationMain';

export type TItemHovered =
  | TNavigationDesctopTitle
  | TNavigationDesctopEnTitle
  | 'Подписка'
  | 'Уведомление'
  | 'Профиль'
  | null;

const Header = () => {
  const { isDesktop } = useAppMediaQuery();
  const { t, i18n } = useTranslation();
  const { setDefaultValue } = userLoginSlice.actions;
  const dispatch = useAppDispatch();
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [itemHovered, setItemHovered] = useState<TItemHovered>(null);
  const { isRegister } = useAppSelector((state) => state.userLoginReduser);

  const changeLanguage = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    if (input.checked) i18n.changeLanguage(input.value);
  };

  const exitFromProfile = () => {
    dispatch(setDefaultValue());
    eraseCookie('token');
  };
  const onMouseLeave = () => setItemHovered(null);
  const onMouseEnter = (title: TItemHovered) => setItemHovered(title);
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
            {isDesktop ? <NavigationMain /> : <NavigationDesktop setItemHovered={setItemHovered} />}
          </div>
          <div className={style.content_combine}>
            <div className={`${style.content_button} ${style.content_block} ${style.lang}`}>
              <input
                type="radio"
                id="check1"
                className={style.checkbox}
                name="lang"
                value="en"
                onClick={changeLanguage}
              />
              <label htmlFor="check1" className={style.label} onChange={changeLanguage}>
                en
              </label>
              <input
                type="radio"
                id="check2"
                className={style.checkbox}
                name="lang"
                value="ru"
                defaultChecked
                onClick={changeLanguage}
              />
              <label htmlFor="check2" className={style.label}>
                ru
              </label>
            </div>
            <div
              onMouseEnter={() => onMouseEnter('Подписка')}
              className={style.content_button + ' ' + style.content_block}
            >
              <RedButton addingClass={style.content_button_btn} text={t('header.freeButton')} />
            </div>
            <div
              className={style.content_search + ' ' + style.content_block}
              onMouseEnter={onMouseLeave}
              onClick={() => setIsSearchModal(true)}
            >
              <button className={style.content_search_btn}>
                <img className={style.content_search_logo} src={logoSearch} alt="logoSearch" />
                {t('header.search')}
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
          className={`${style.dropdown}
          ${itemHovered && style.dropdown_visible}
          ${itemHovered === 'Уведомление' && style.dropdown_small}`}
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
        {isSearchModal && (
          <UIModal>
            <ModalSearch closeModal={() => setIsSearchModal(false)} />
          </UIModal>
        )}
      </div>
    </header>
  );
};

export default Header;
// function dispatch(arg0: { payload: undefined; type: 'login/setDefaultValue' }) {
//   throw new Error('Function not implemented.');
// }
