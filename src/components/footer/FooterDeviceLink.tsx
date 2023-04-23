import React from 'react';
import style from './footer.module.scss';

type TFooterDeviceLinkProps = {
  logoSrc: string;
  text?: string;
  device: string;
};

const FooterDeviceLink: React.FC<TFooterDeviceLinkProps> = ({ logoSrc, text, device }) => {
  return (
    <React.Fragment>
      <img className={style.devices_logo} src={logoSrc} alt={device} />
      <div className={style.devices_text}>
        <p className={style.devices_text_extra}>{text}</p>
        <p className={style.devices_text_store}>{device}</p>
      </div>
    </React.Fragment>
  );
};

export default FooterDeviceLink;
