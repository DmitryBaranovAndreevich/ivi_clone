import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
  reducerPath: 'app',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
  }),
  endpoints: (build) => ({
    getGenres: build.query({
      query: () => ({
        url: 'genres',
      }),
    }),
  }),
});

export const { useGetGenresQuery } = appApi;
