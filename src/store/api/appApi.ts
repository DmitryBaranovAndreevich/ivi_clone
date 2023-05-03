import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TGenreCountriesYears } from '../../type/type';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
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
