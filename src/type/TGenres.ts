import { IFilmsList } from './TFilm';

export type TFilmGenres = {
  id: number;
  filmId: number;
  genreId: number;
};

export interface IGenre {
  id: number;
  name: string;
  englishName: string;
}

export interface IGenres {
  id: number;
  name: string;
  englishName: string;
  films: IFilmsList;
}
