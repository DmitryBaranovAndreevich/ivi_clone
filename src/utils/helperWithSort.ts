import { IFilm } from '../type/TFilm';

const sortAscending = (array: Array<IFilm>, field: keyof IFilm): Array<IFilm> => {
  // return array;
  const q = array.sort((a: IFilm, b: IFilm) => {
    return a[field] > b[field] ? 1 : -1;
  });
  // console.log(q);
  return q;
};

type TFuncSortList = (
  kindSort: string,
  filmFilter: Array<IFilm> | undefined
) => Array<IFilm> | undefined;

export const sortList: TFuncSortList = (kindSort, filmFilter) => {
  const filmFilterCopy = filmFilter ? [...filmFilter] : [];
  if (filmFilter) {
    switch (kindSort) {
      case 'mark':
        return sortAscending(filmFilterCopy, 'ratingsNumber');
        break;
      case 'rate':
        // console.log(sortAscending(filmFilterCopy, 'rating'));
        return sortAscending(filmFilterCopy, 'rating');
        break;
      case 'year':
        return sortAscending(filmFilterCopy, 'year');
        break;
      case 'name':
        return sortAscending(filmFilterCopy, 'name');
        break;
      default:
        return filmFilter;
    }
  } else {
    return filmFilterCopy;
  }
};
