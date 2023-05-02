import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TGenre } from '../../type/type';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
  }),
  endpoints: (build) => ({
    getGenres: build.query<TGenre[], ''>({
      query: () => ({
        url: 'genres',
      }),
      transformResponse: (response: TGenre[]): TGenre[] => {
        return response.map((genre: TGenre) => {
          return {
            id: genre.id,
            name: genre.name,
            englishName: genre.englishName,
          };
        });
      },
    }),
  }),
});

export const { useGetGenresQuery } = appApi;
