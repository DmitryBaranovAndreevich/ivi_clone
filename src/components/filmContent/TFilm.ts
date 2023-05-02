type TFilmRoles = {
  id: number;
  filmId: number;
  personId: number;
};

interface IDirectors {
  id: number;
  name: string;
  photo: string;
  FilmDirectors: TFilmRoles;
}
interface IActors {
  id: number;
  name: string;
  photo: string;
  FilmActors: TFilmRoles;
}
interface IWriters {
  id: number;
  name: string;
  photo: string;
  FilmWriters: TFilmRoles;
}
interface IProducers {
  id: number;
  name: string;
  photo: string;
  FilmProducers: TFilmRoles;
}
interface ICinematography {
  id: number;
  name: string;
  photo: string;
  FilmCinematography: TFilmRoles;
}
interface IMusicians {
  id: number;
  name: string;
  photo: string;
  FilmMusicians: TFilmRoles;
}
interface IEditors {
  id: number;
  name: string;
  photo: string;
  FilmEditors: TFilmRoles;
}
interface IDesigners {
  id: number;
  name: string;
  photo: string;
  FilmDesigners: TFilmRoles;
}

type TFilmGenres = {
  id: number;
  filmId: number;
  genreId: number;
};

interface IGenres {
  id: number;
  name: string;
  englishName: string;
  FilmGenres: TFilmGenres;
}

type TFilmAwards = {
  id: number;
  awardId: number;
  nominationId: number;
  filmId: number;
};

interface IAwards {
  id: number;
  name: string;
  year: number;
  FilmAwards: TFilmAwards;
}

type TFilmCountries = {
  id: number;
  filmId: number;
  countryId: number;
};

interface ICountries {
  id: number;
  name: string;
  englishName: string;
  FilmCountries: TFilmCountries;
}

export interface IFilm {
  id: number;
  name: string;
  poster: string;
  mpaaRating: string;
  rating: string;
  ratingsNumber: number;
  year: number;
  duration: string;
  description: string;
  directors: Array<IDirectors>;
  actors: Array<IActors>;
  writers: Array<IWriters>;
  producers: Array<IProducers>;
  cinematography: Array<ICinematography>;
  musicians: Array<IMusicians>;
  designers: Array<IDesigners>;
  editors: Array<IEditors>;
  genres: Array<IGenres>;
  awards: Array<IAwards>;
  countries: Array<ICountries>;
  reviews: Array<string>;
}
