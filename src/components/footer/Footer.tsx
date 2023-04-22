import React from 'react';
import useAppMediaQuery from '../../hooks/useAppMediaQuery';
import style from './footer.module.scss';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';

export type TMockObj = {
  title: string;
  href: string;
};

const Footer = () => {
  const { isSmallDesktop } = useAppMediaQuery();
  return (
    <footer className={style.footer}>
      {!isSmallDesktop && (
        <>
          <FooterTop />
          <FooterBottom />
        </>
      )}
    </footer>
  );
};

export default Footer;
