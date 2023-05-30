import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFilm } from '../../type/TFilm';

export const filmApi = createApi({
  reducerPath: 'filmApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
  }),
  endpoints: (build) => ({
    getFilms: build.query<
      IFilm[],
      {
        pathName: string | null;
        searchRatingGte: string | null;
        searchRatingsNumberGte: string | null;
        searchPerson?: string | null;
      }
    >({
      query: ({ pathName, searchRatingGte, searchRatingsNumberGte, searchPerson }) => {
        const searchParams = [];
        if (searchRatingGte) {
          searchParams.push(`rating_gte=${searchRatingGte}`);
        }
        if (searchRatingsNumberGte) {
          searchParams.push(`ratingsNumber_gte=${searchRatingsNumberGte}`);
        }
        if (searchPerson) {
          searchParams.push(`person=${searchPerson.split('+').join(' ')}`);
        }
        if (!pathName) {
          return { url: `films/?${searchParams.join('&')}` };
        }
        return { url: `films/filter${pathName}?${searchParams.join('&')}` };
      },
    }),
    getOneFilm: build.query<IFilm, { id: string | undefined }>({
      query: ({ id }) => {
        return { url: `films/${id}` };
      },
    }),
  }),
});

export const { useGetFilmsQuery, useGetOneFilmQuery } = filmApi;
