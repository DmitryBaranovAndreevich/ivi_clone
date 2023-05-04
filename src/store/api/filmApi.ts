import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFilm } from '../../components/filmContent/TFilm';

export const filmApi = createApi({
  reducerPath: 'filmApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
  }),
  endpoints: (build) => ({
    getFilms: build.query<IFilm[], { pathName: string | null; search: string | null }>({
      query: ({ pathName, search }) => {
        debugger;
        if (!pathName) {
          return { url: 'films' };
        }
        return { url: `films/filter${pathName}${search}` };
      },
    }),
  }),
});

export const { useGetFilmsQuery } = filmApi;
