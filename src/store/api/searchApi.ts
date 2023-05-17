import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFilm } from '../../type/TFilm';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
  }),
  endpoints: (build) => ({
    getPersonByName: build.query<IFilm[], { name: string }>({
      query: ({ name }) => {
        return { url: `persons/name/${name}` };
      },
    }),
  }),
});

export const { useGetPersonByNameQuery } = searchApi;
