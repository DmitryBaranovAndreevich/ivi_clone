import { IFilmsList } from './TFilm';

export type TFilmCountries = {
  id: number;
  filmId: number;
  countryId: number;
};

export interface ICountry {
  id: number;
  name: string;
  englishName: string;
}

export interface ICountries {
  id: number;
  name: string;
  englishName: string;
  films: IFilmsList;
}
