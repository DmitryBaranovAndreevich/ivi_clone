import React from 'react';
import style from './DropdownProfile.module.scss';
import logoFolder from './../../../assests/svg/logoFolder.svg';
import logoBookmark from './../../../assests/svg/logoBookmark.svg';
import logoClockBackward from './../../../assests/svg/logoClockBackward.svg';
import logoDownload from './../../../assests/svg/logoDownload.svg';
import logoComputer from './../../../assests/svg/logoComputer.svg';
import logoCard from './../../../assests/svg/logoCard.svg';
import { useNavigate } from 'react-router-dom';
import DropdownSubscribeCard from '../dropdownSubscribe/DropdownSubscribeCard';
import RedButton from '../../UI/redButton/RedButton';
import UILink from '../../UI/Link/UILink';

const DropdownProfile: React.FC = () => {
  const navigate = useNavigate();
  const onClick = (href: string) => {
    navigate(href);
  };
  return (
    <>
      <div className={style.content}>
        <div className={style.mainBlock}>
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard
              logo={logoFolder}
              text={'Покупки'}
              onClick={() => onClick('https://www.ivi.tv/profile/purchases')}
            />
          </div>
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard
              logo={logoBookmark}
              text={'Смотреть позже'}
              onClick={() => onClick('https://www.ivi.tv/profile/favorites')}
            />
          </div>
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard
              logo={logoClockBackward}
              text={'История просмотров'}
              onClick={() => onClick('https://www.ivi.tv/profile/watched')}
            />
          </div>
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard
              logo={logoDownload}
              text={'Подписки'}
              onClick={() => onClick('https://www.ivi.tv/profile/subscriptions')}
            />
          </div>
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard logo={logoComputer} text={'Активация сертификата'} />
          </div>
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard logo={logoComputer} text={'Вход по коду'} />
          </div>
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard
              logo={logoCard}
              text={'Способы оплаты'}
              onClick={() => onClick('https://www.ivi.tv/profile/cards')}
            />
          </div>
        </div>
      </div>
      <div className={style.line}></div>
      <div className={style.aside}>
        <RedButton addingClass={style.aside_button} text="Войти или зарегистрироваться" />
        <div className={style.list}>
          <UILink
            addingClass={style.list_link}
            title={'Настройки'}
            href={`https://www.ivi.tv/profile/settings`}
          />
          <UILink addingClass={style.list_link} title={'Помощь'} href={`https://ask.ivi.ru/`} />
        </div>
      </div>
    </>
  );
};

export default DropdownProfile;
