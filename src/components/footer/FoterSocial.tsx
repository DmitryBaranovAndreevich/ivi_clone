import React, { ReactNode, useMemo } from 'react';
import style from './footer.module.scss';
import UIButton from '../UI/UIButton/UIButton';
import logoVK from './../../assests/svg/logoSocialVK.svg';
import logoOK from './../../assests/svg/logoSocialOK.svg';
import logoTwitter from './../../assests/svg/logoSocialTwitter.svg';
import logoViber from './../../assests/svg/logoSocialViber.svg';
import logoLinkedin from './../../assests/svg/logoSocialLinkedin.svg';
import logoTelegram from './../../assests/svg/logoSocialTelegram.svg';

export type TMockObj = {
  title: string;
  href: string;
};

const MOCK_SOCIAL: Array<TMockObj> = [
  { title: 'VK', href: 'https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e' },
  { title: 'OK', href: 'https://ok.ru/ivi.ru' },
  { title: 'Twitter', href: 'https://twitter.com/ivi_ru' },
  { title: 'Viber', href: 'https://vb.me/a0544c' },
  { title: 'Linkedin', href: 'https://www.linkedin.com/company/2543415/' },
  { title: 'Telegram', href: 'https://t.me/official_iviru' },
];

const FoterSocial = () => {
  // const itemsBlock: Array<ReactNode> = useMemo((): Array<ReactNode> => {
  //   return MOCK_SOCIAL.map(({ title, href }: TMockObj): ReactNode => {
  //     return (
  //       <li className={style.block_item} key={title}>
  //         <UIButton addingClass={style.link} href={href}>
  //           <img src={`logoSocial${title}.svg`} alt={title} />
  //         </UIButton>
  //       </li>
  //     );
  //   });
  // }, [MOCK_SOCIAL]);
  return (
    <ul className={style.social_list}>
      <UIButton
        addingClass={style.social_list_item}
        href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
        target="_blank"
      >
        <img className={style.social_list_logo} src={logoVK} alt="VK" />
      </UIButton>
      <UIButton addingClass={style.social_list_item} href="https://ok.ru/ivi.ru" target="_blank">
        <img className={style.social_list_logo} src={logoOK} alt="OK" />
      </UIButton>
      <UIButton
        addingClass={style.social_list_item}
        href="https://twitter.com/ivi_ru"
        target="_blank"
      >
        <img className={style.social_list_logo} src={logoTwitter} alt="Twitter" />
      </UIButton>
      <UIButton addingClass={style.social_list_item} href="https://vb.me/a0544c" target="_blank">
        <img className={style.social_list_logo} src={logoViber} alt="Viber" />
      </UIButton>
      <UIButton
        addingClass={style.social_list_item}
        href="https://www.linkedin.com/company/2543415/"
        target="_blank"
      >
        <img className={style.social_list_logo} src={logoLinkedin} alt="Linkedin" />
      </UIButton>
      <UIButton
        addingClass={style.social_list_item}
        href="https://t.me/official_iviru"
        target="_blank"
      >
        <img className={style.social_list_logo} src={logoTelegram} alt="Telegram" />
      </UIButton>
    </ul>
  );
};

export default FoterSocial;
