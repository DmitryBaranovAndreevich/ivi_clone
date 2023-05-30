import React, { useCallback, useMemo } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { TObjWithParamsUrl } from '../../hooks/useNavigation';
import { useGetCountriesQuery, useGetGenresQuery } from '../../store/api/appApi';
import { TGenreCountriesYears } from '../../type/type';
import style from './MoviesHeader.module.scss';
import { useTranslation } from 'react-i18next';

type TMoviesHeaderProps = {
  meanUrl: TObjWithParamsUrl;
};

const MoviesHeader: React.FC<TMoviesHeaderProps> = ({ meanUrl }) => {
  const { t, i18n } = useTranslation();
  const { data: genres } = useGetGenresQuery('');
  const { data: countries } = useGetCountriesQuery('');
  const { years } = useAppSelector((state) => state.appReducer);
  const makeListOneCategory = useCallback(
    (
      data: TGenreCountriesYears[] | undefined,
      choosenData: string | undefined | null,
      lang: string
    ) => {
      const choosenArray = choosenData?.split('+') || [];
      return data?.map((item: TGenreCountriesYears) => {
        for (let i = 0; i < choosenArray.length; i++) {
          if (item.englishName === choosenArray[i]) {
            return lang === 'ru' ? item.name : item.englishName;
          }
        }
      });
    },
    []
  );

  const listAllCategories = useMemo(() => {
    const listGenres = makeListOneCategory(genres, meanUrl.genre, i18n.language) || [];
    const listCountries = makeListOneCategory(countries, meanUrl.country, i18n.language) || [];
    const listYears = makeListOneCategory(years, meanUrl.year, i18n.language) || [];
    const fullList = [...listGenres, ...listCountries, ...listYears].filter((item) => item);
    const fullListInStr = fullList.join(', ');
    return fullListInStr;
  }, [genres, countries, years, makeListOneCategory, meanUrl, i18n.language]);

  return (
    <div className={style.header}>
      <h2 className={style.title}>{t('filter.title')}</h2>
      <div className={style.list}>
        <p className={style.list_text}>{listAllCategories}</p>
      </div>
    </div>
  );
};

export default MoviesHeader;
