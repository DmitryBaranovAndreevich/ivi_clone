import { useParams } from 'react-router-dom';
import { TGenre } from '../type/type';

export type TObjWithParamsUrl = {
  genre?: string | null;
  country?: string | null;
  year?: string | null;
};

export const useNavigation = (
  genres: Array<TGenre> | undefined,
  countries: Array<TGenre> | undefined,
  years: Array<TGenre> | undefined
) => {
  const params = useParams();
  const objWithParamsUrl: TObjWithParamsUrl = {};
  const isInclude = (listItem: Array<TGenre>, params: string) => {
    return listItem.some((item) => item.englishName === params.split('+')[0]);
  };
  debugger;
  if (params.first && params.second && params.third) {
    return { genre: params.first, country: params.second, years: params.third };
  } else if (params.first && params.second && !params.third) {
    if (genres && isInclude(genres, params.first)) {
      objWithParamsUrl.genre = params.first;
    } else if (countries && isInclude(countries, params.first)) {
      objWithParamsUrl.country = params.first;
    } else if (years && isInclude(years, params.first)) {
      objWithParamsUrl.year = params.first;
    }
    if (genres && isInclude(genres, params.second)) {
      objWithParamsUrl.genre = params.second;
    } else if (countries && isInclude(countries, params.second)) {
      objWithParamsUrl.country = params.second;
    } else if (years && isInclude(years, params.second)) {
      objWithParamsUrl.year = params.second;
    }
  } else if (params.first && !params.second && !params.third) {
    if (genres && isInclude(genres, params.first)) {
      objWithParamsUrl.genre = params.first;
    } else if (countries && isInclude(countries, params.first)) {
      objWithParamsUrl.country = params.first;
    } else if (years && isInclude(years, params.first)) {
      objWithParamsUrl.year = params.first;
    }
  }
  return objWithParamsUrl;
};
