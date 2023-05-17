import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import TPerson from '../../type/TPerson';

export const personApi = createApi({
  reducerPath: 'personApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
  }),
  endpoints: (build) => ({
    getPerson: build.query<TPerson, { id: string; token: string }>({
      query: ({ id, token }) => ({
        url: `persons/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetPersonQuery } = personApi;
