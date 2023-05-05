import { IFilm } from '../type/TFilm';

const sortAscending = (array: Array<IFilm>, field: keyof IFilm): Array<IFilm> => {
  return array?.sort((a: IFilm, b: IFilm) => (a[field] > b[field] ? 1 : -1));
};

type TFuncSortList = (
  kindSort: string,
  filmFilter: Array<IFilm> | undefined
) => Array<IFilm> | undefined;

export const sortList: TFuncSortList = (kindSort, filmFilter) => {
  if (filmFilter) {
    switch (kindSort) {
      case 'mark':
        return sortAscending(filmFilter, 'ratingsNumber');
        break;
      case 'rate':
        return sortAscending(filmFilter, 'rating');
        break;
      case 'year':
        return sortAscending(filmFilter, 'year');
        break;
      case 'name':
        return sortAscending(filmFilter, 'name');
        break;
      default:
        return filmFilter;
    }
  } else {
    [];
  }
};
