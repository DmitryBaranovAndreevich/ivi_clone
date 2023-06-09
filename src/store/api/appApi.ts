import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_TO_FILMS } from '../../service/constans';

import { TGenreCountriesYears } from '../../type/type';
import { IFilm } from '../../type/TFilm';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_TO_FILMS,
  }),
  endpoints: (build) => ({
    getGenres: build.query<TGenreCountriesYears[], ''>({
      query: () => ({
        url: 'genres',
      }),
      transformResponse: (response: TGenreCountriesYears[]): TGenreCountriesYears[] => {
        return response.map((genre: TGenreCountriesYears) => {
          return {
            id: genre.id,
            name: genre.name,
            englishName: genre.englishName,
          };
        });
      },
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
    getCountries: build.query<TGenreCountriesYears[], ''>({
      query: () => ({
        url: 'countries',
      }),
      transformResponse: (response: TGenreCountriesYears[]): TGenreCountriesYears[] => {
        return response.map((country: TGenreCountriesYears) => {
          return {
            id: country.id,
            name: country.name,
            englishName: country.englishName,
          };
        });
      },
    }),
  }),
});

export const { useGetGenresQuery, useGetCountriesQuery } = appApi;
