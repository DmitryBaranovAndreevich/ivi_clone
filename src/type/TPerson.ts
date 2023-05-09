import { IFilmsList } from './TFilm';

type TPersonProfessions = {
  id: number;
  personId: number;
  professionId: number;
};

export type TPersonFilms = {
  id: number;
  filmId: number;
  personId: number;
  professionId: number;
};

export interface IProfession {
  id: number;
  name: string;
  persons: Array<IProfessionsPersons>;
}

export interface IProfessions {
  id: number;
  name: string;
}

export type IProfessionsPersons = {
  id: number;
  name: string;
  originalName: string;
  photo: string;
  PersonProfessions: Array<TPersonProfessions>;
};

export interface IPersonProfessions {
  id: number;
  name: string;
  PersonProfessions: TPersonProfessions;
}

export interface IPerson {
  id: number;
  name: string;
  originalName: string;
  photo: string;
  films: Array<IFilmsList>;
  professions: Array<IPersonProfessions>;
}

export interface IPersons {
  id: number;
  name: string;
  originalName: string;
  photo: string;
}
