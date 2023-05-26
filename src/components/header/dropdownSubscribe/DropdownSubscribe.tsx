import React from 'react';
import style from './DropdownSubscribe.module.scss';
import { appApi } from '../../../store/api/appApi';
import DropdownSubscribeCard from './DropdownSubscribeCard';
import logoCamera from './../../../assests/svg/logoCamera.svg';
import logoFolderWithPlus from './../../../assests/svg/logoFolderWithPlus.svg';
import logoMegaphone from './../../../assests/svg/logoMegaphone.svg';
import logoComputer from './../../../assests/svg/logoComputer.svg';
import logoDownload from './../../../assests/svg/logoDownload.svg';
import ButtonWithHoverBgc from '../../UI/buttonWithHoverBgc/ButtonWithHoverBgc';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import InfiniteSlider from '../../infiniteSlider/InfiniteSlider';
import { IFilm } from '../../../type/TFilm';

const DropdownSubscribe: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data } = appApi.useGetAllFilmsQuery('');
  return (
    <>
      <div className={style.content}>
        <div className={style.headerBlock}>
          <h2 className={style.title}>{t('dropdown.subscribe')}</h2>
          <p className={style.text}>{t('dropdown.benefits')}</p>
        </div>
        <div className={style.mainBlock}>
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard logo={logoCamera} text={t('dropdown.new')} />
          </div>
          <div className={style.mainBlock_width}>
            <DropdownSubscribeCard logo={logoFolderWithPlus} text={t('dropdown.filling')} />
          </div>
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard logo={logoMegaphone} text={t('dropdown.withoutAds')} />
          </div>{' '}
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard logo={logoComputer} text={t('dropdown.account')} />
          </div>{' '}
          <div className={style.mainBlock_narrow}>
            <DropdownSubscribeCard logo={logoDownload} text={t('dropdown.uploading')} />
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.slider}>
          <InfiniteSlider items={data as IFilm[]} />
          <InfiniteSlider items={data as IFilm[]} rtl={true} />
          <InfiniteSlider items={data as IFilm[]} />
        </div>
        <ButtonWithHoverBgc
          title={t('dropdown.otherSubscriptions')}
          addingClass={style.button}
          onClick={() => navigate('https://www.ivi.tv/profile/subscriptio')}
        />
      </div>
    </>
  );
};

export default DropdownSubscribe;
