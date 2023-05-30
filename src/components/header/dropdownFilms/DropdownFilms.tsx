import React from 'react';
import style from './DropdownFilms.module.scss';
import { useAppSelector } from '../../../hooks/redux';
import { appApi, useGetCountriesQuery, useGetGenresQuery } from '../../../store/api/appApi';
import DropdownBlock from './DropdownBlock';
import DropdownSlider from './DropdownSlider';
import UIButton from '../../UI/UIButton/UIButton';
import logoTV from './../../../assests/svg/logoTV.svg';
import InfiniteSlider from '../../infiniteSlider/InfiniteSlider';
import { IFilm } from '../../../type/TFilm';
import { useTranslation } from 'react-i18next';

const DropdownFilms: React.FC = () => {
  const { t } = useTranslation();
  const { data: genres } = useGetGenresQuery('');
  const { data: countries } = useGetCountriesQuery('');
  const { years } = useAppSelector((state) => state.appReducer);
  const { data } = appApi.useGetAllFilmsQuery('');
  const { headerInfoFilm } = useAppSelector((state) => state.appReducer);
  return (
    <>
      <div className={style.dropdown_content}>
        <div className={style.dropdown_content_width}>
          <DropdownBlock title={t('filter.genres')} titleRu="Жанры" listItems={genres} />
        </div>
        <div className={style.dropdown_content_regular}>
          <DropdownBlock title={t('filter.countries')} titleRu="Страны" listItems={countries} />
          <DropdownBlock title={t('filter.years')} titleRu="Годы" listItems={years} />
        </div>
        <div className={style.dropdown_content_regular}>
          <DropdownSlider listItems={headerInfoFilm} />
        </div>
      </div>
      <div className={style.adding}>
        <div className={style.adding_subscribe}>
          {data && (
            <>
              <InfiniteSlider items={data as IFilm[]} />
              <InfiniteSlider items={data as IFilm[]} rtl={true} />
              <InfiniteSlider items={data as IFilm[]} />
            </>
          )}
        </div>
        <UIButton href={'https://www.ivi.ru/pages/tvsmart/'} addingClass={style.adding_btn}>
          <img className={style.adding_btn_logo} src={logoTV} alt="logoTV" />
          {t('dropdown.watchSmartTv')}
        </UIButton>
      </div>
    </>
  );
};

export default DropdownFilms;
