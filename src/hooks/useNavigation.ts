import { useParams } from 'react-router-dom';
import { TGenreCountriesYears } from '../type/type';

export type TObjWithParamsUrl = {
  genre?: string | null;
  country?: string | null;
  year?: string | null;
};

export const useNavigation = (
  genres: Array<TGenreCountriesYears> | undefined,
  years: Array<TGenreCountriesYears> | undefined,
  countries: Array<TGenreCountriesYears> | undefined
) => {
  const params = useParams();
  const objWithParamsUrl: TObjWithParamsUrl = {};
  const isInclude = (listItem: Array<TGenreCountriesYears>, params: string) => {
    return listItem.some((item) => item.englishName === params.split('+')[0]);
  };
  if (params.first && params.second && params.third) {
    return { genre: params.first, year: params.second, country: params.third };
  } else if (params.first && params.second && !params.third) {
    if (genres && isInclude(genres, params.first)) {
      objWithParamsUrl.genre = params.first;
    } else if (years && isInclude(years, params.first)) {
      objWithParamsUrl.year = params.first;
    } else if (countries && isInclude(countries, params.first)) {
      objWithParamsUrl.country = params.first;
    }
    if (years && isInclude(years, params.second)) {
      objWithParamsUrl.year = params.second;
    } else if (countries && isInclude(countries, params.second)) {
      objWithParamsUrl.country = params.second;
    }
  } else if (params.first && !params.second && !params.third) {
    if (genres && isInclude(genres, params.first)) {
      objWithParamsUrl.genre = params.first;
    } else if (years && isInclude(years, params.first)) {
      objWithParamsUrl.year = params.first;
    } else if (countries && isInclude(countries, params.first)) {
      objWithParamsUrl.country = params.first;
    }
  }
  return objWithParamsUrl;
};
