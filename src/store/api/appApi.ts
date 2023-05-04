import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_TO_FILMS } from '../../service/constans';

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
}

export interface IGenre {
  id: number;
  name: string;
  englishName: string;
  films: IFilm[];
}

export const appApi = createApi({
  reducerPath: 'app',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_TO_FILMS,
  }),
  endpoints: (build) => ({
    getGenres: build.query<IGenre[], string>({
      query: () => ({
        url: '/genres',
      }),
    }),
    getMoviesOfGenre: build.query<IFilm[], string>({
      query: (genre) => ({
        url: `/films/filter/${genre}`,
      }),
    }),
    getAllFilms: build.query<IFilm[], string>({
      query: () => ({
        url: '/films',
      }),
    }),
  }),
});

export const { useGetGenresQuery } = appApi;
