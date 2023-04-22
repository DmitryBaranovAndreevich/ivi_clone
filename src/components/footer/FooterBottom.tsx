import React from 'react';
import style from './footer.module.scss';
import logoApple from '../../assests/svg/logoApple.svg';
import UIButton from '../UI/UIButton/UIButton';
import FooterDeviceLink from './FooterDeviceLink';
import FoterSocial from './FoterSocial';

export type TMockObj = {
  title: string;
  href: string;
};

const MOCK_ABOUT: Array<TMockObj> = [
  { title: 'VK', href: 'https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e' },
  { title: 'OK', href: 'https://ok.ru/ivi.ru' },
  { title: 'twitter', href: 'https://twitter.com/ivi_ru' },
  { title: 'Viber', href: 'https://vb.me/a0544c' },
  { title: 'Linkedin', href: 'https://www.linkedin.com/company/2543415/' },
  { title: 'Telegram', href: 'https://t.me/official_iviru' },
];

const FooterBottom = () => {
  return (
    <div className={style.content}>
      <div className={style.column + ' ' + style.column_width}>
        <div className={style.devices}>
          <UIButton
            href={'https://go.onelink.me/app/devicesiOS'}
            addingClass={style.devices_link}
            target="_blank"
          >
            <FooterDeviceLink logoSrc={logoApple} text="Загрузить в" device="App Store" />
          </UIButton>
          <UIButton
            href={'https://go.onelink.me/app/devicesAndroid'}
            addingClass={style.devices_link}
          >
            <FooterDeviceLink logoSrc={logoApple} text="Доступно в" device="Google Play" />
          </UIButton>
          <UIButton
            href={'https://go.onelink.me/app/devicesiOS'}
            addingClass={style.devices_link}
            target="_blank"
          >
            <FooterDeviceLink logoSrc={logoApple} text="Смотрите на" device="Smart TV" />
          </UIButton>
          <UIButton
            href={'https://go.onelink.me/app/devicesiOS'}
            addingClass={style.devices_link}
            target="_blank"
          >
            <FooterDeviceLink logoSrc={logoApple} device="Все устройства" />
          </UIButton>
        </div>
        <div className={style.copyrights}>
          <p className={style.copyrights_site}>© 2023 ООО «Иви.ру»</p>
          <p className={style.copyrights_content}>
            HBO ® and related service marks are the property of Home Box Office, Inc
          </p>
        </div>
      </div>
      <div className={style.column + ' ' + style.column_width}>
        <div className={style.social}>
          <FoterSocial />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
