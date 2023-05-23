import React from 'react';
import style from './DropdownSubscribe.module.scss';
import logoCamera from './../../../assests/svg/logoCamera.svg';
import logoFolderWithPlus from './../../../assests/svg/logoFolderWithPlus.svg';
import logoMegaphone from './../../../assests/svg/logoMegaphone.svg';
import logoComputer from './../../../assests/svg/logoComputer.svg';
import logoDownload from './../../../assests/svg/logoDownload.svg';
import ButtonWithHoverBgc from '../../UI/buttonWithHoverBgc/ButtonWithHoverBgc';
import { useNavigate } from 'react-router-dom';
import DropdownSubscribeCard from '../dropdownSubscribe/DropdownSubscribeCard';

const DropdownSubscribe: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.content}>
        <div className={style.headerBlock}>
          <h2 className={style.title}>Подписка Иви</h2>
          <p className={style.text}>Все преимущества - в одной подписке</p>
        </div>
        <div className={style.mainBlock}>
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard logo={logoCamera} text={'Новинки сериалов и фильмов'} />
          </div>
          <div className={style.mainBlock_width}>
            <DropdownSubscribeCard
              logo={logoFolderWithPlus}
              text={'Еженедельное наполнение каталога фильмами и сериалами со всего мира'}
            />
          </div>
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard logo={logoMegaphone} text={'Фильмы и сериалы без реклами'} />
          </div>{' '}
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard logo={logoComputer} text={'Семейный аккаунт на 5 устройствах'} />
          </div>{' '}
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard logo={logoDownload} text={'Загрузка на мобильные устройства'} />
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.slider}></div>
        <ButtonWithHoverBgc
          title="Другие подписки"
          addingClass={style.button}
          onClick={() => navigate('https://www.ivi.tv/profile/subscriptio')}
        />
      </div>
    </>
  );
};

export default DropdownSubscribe;
