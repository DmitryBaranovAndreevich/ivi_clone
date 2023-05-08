import { TFilmCountries } from './TCountry';
import { TFilmGenres } from './TGenres';
import { TPersonFilms } from './TPerson';

type TFilmRoles = {
  id: number;
  filmId: number;
  personId: number;
};

type TRoles = {
  id: number;
  name: string;
  originalName: string;
  photo: string;
};

export interface IDirectors {
  id: number;
  name: string;
  originalName: string;
  photo: string;
  FilmDirectors: TFilmRoles;
}

export interface IActors {
  id: number;
  name: string;
  originalName: string;
  photo: string;
  FilmActors: TFilmRoles;
}

export interface IWriters {
  id: number;
  name: string;
  originalName: string;
  photo: string;
  FilmWriters: TFilmRoles;
}

export interface IProducers {
  id: number;
  name: string;
  originalName: string;
  photo: string;
  FilmProducers: TFilmRoles;
}

export interface ICinematography {
  id: number;
  name: string;
  originalName: string;
  photo: string;
  FilmCinematography: TFilmRoles;
}

export interface IMusicians {
  id: number;
  name: string;
  originalName: string;
  photo: string;
  FilmMusicians: TFilmRoles;
}

export interface IEditors {
  id: number;
  name: string;
  originalName: string;
  photo: string;
  FilmEditors: TFilmRoles;
}

export interface IDesigners {
  id: number;
  name: string;
  originalName: string;
  photo: string;
  FilmDesigners: TFilmRoles;
}

export interface IGenres {
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

export interface ICountries {
  id: number;
  name: string;
  englishName: string;
  FilmCountries: TFilmCountries;
}

export interface IFilm {
  id: number;
  name: string;
  originalName: string;
  poster: string;
  trailer: string;
  mpaaRating: string;
  rating: number;
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
  relatedFilms: Array<IFilmsList>;
}

export interface IFilmsList {
  id: number;
  name: string;
  originalName: string;
  poster: string;
  trailer: string;
  mpaaRating: string;
  rating: number;
  ratingsNumber: number;
  year: number;
  duration: number;
  description: string;
  FilmCountries?: TFilmCountries;
  FilmGenres?: TFilmGenres;
  PersonFilms?: TPersonFilms;
}
