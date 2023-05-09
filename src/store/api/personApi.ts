import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPerson, IPersons } from '../../type/TPerson';

export const personApi = createApi({
  reducerPath: 'personApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
  }),
  endpoints: (build) => ({
    getPersons: build.query<IPersons[], ''>({
      query: () => {
        return { url: 'persons' };
      },
    }),
    getOnePerson: build.query<IPerson, { id: string | undefined }>({
      query: ({ id }) => {
        return { url: `persons/${id}` };
      },
    }),
  }),
});

export const { useGetPersonsQuery, useGetOnePersonQuery } = personApi;
