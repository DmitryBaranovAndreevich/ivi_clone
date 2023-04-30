import { useParams } from 'react-router-dom';
import { TGenre } from '../type/type';

export type TObjWithParamsUrl = {
  genre?: string | null;
  country?: string | null;
  year?: string | null;
};

export const useNavigation = (
  genres: Array<TGenre>,
  countries: Array<TGenre>,
  years: Array<TGenre>
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
    if (isInclude(genres, params.first)) {
      objWithParamsUrl.genre = params.first;
    } else if (isInclude(countries, params.first)) {
      objWithParamsUrl.country = params.first;
    } else if (isInclude(years, params.first)) {
      objWithParamsUrl.year = params.first;
    }
    if (isInclude(genres, params.second)) {
      objWithParamsUrl.genre = params.second;
    } else if (isInclude(countries, params.second)) {
      objWithParamsUrl.country = params.second;
    } else if (isInclude(years, params.second)) {
      objWithParamsUrl.year = params.second;
    }
  } else if (params.first && !params.second && !params.third) {
    if (isInclude(genres, params.first)) {
      objWithParamsUrl.genre = params.first;
    } else if (isInclude(countries, params.first)) {
      objWithParamsUrl.country = params.first;
    } else if (isInclude(years, params.first)) {
      objWithParamsUrl.year = params.first;
    }
  }
  return objWithParamsUrl;
};
