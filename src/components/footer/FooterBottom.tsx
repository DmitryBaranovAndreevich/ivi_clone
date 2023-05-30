import React from 'react';
import style from './footer.module.scss';
import logoApple from '../../assests/svg/logoApple.svg';
import UIButton from '../UI/UIButton/UIButton';
import FooterDeviceLink from './FooterDeviceLink';
import FoterSocial from './FoterSocial';
import { useTranslation } from 'react-i18next';

export type TMockObj = {
  title: string;
  href: string;
};

const FooterBottom = () => {
  const { t } = useTranslation();
  return (
    <div className={style.content}>
      <div className={style.column + ' ' + style.column_width}>
        <div className={style.devices}>
          <UIButton
            href={'https://go.onelink.me/app/devicesiOS'}
            addingClass={style.devices_link}
            target="_blank"
          >
            <FooterDeviceLink
              logoSrc={logoApple}
              text={t('footerDevice.upload') ?? ''}
              device="App Store"
            />
          </UIButton>
          <UIButton
            href={'https://go.onelink.me/app/devicesAndroid'}
            addingClass={style.devices_link}
          >
            <FooterDeviceLink
              logoSrc={logoApple}
              text={t('footerDevice.available') ?? ''}
              device="Google Play"
            />
          </UIButton>
          <UIButton
            href={'https://go.onelink.me/app/devicesiOS'}
            addingClass={style.devices_link}
            target="_blank"
          >
            <FooterDeviceLink
              logoSrc={logoApple}
              text={t('footerDevice.look') ?? ''}
              device="Smart TV"
            />
          </UIButton>
          <UIButton
            href={'https://go.onelink.me/app/devicesiOS'}
            addingClass={style.devices_link}
            target="_blank"
          >
            <FooterDeviceLink logoSrc={logoApple} device={t('footerDevice.devices') ?? ''} />
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
