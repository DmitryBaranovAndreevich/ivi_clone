import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFilm } from '../../type/TFilm';
import IPerson from '../../type/TPerson';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
  }),
  endpoints: (build) => ({
    getPersonByName: build.query<IPerson[], { profession: string | null; name: string | null }>({
      query: ({ profession, name }) => {
        const searchParams = [];
        if (profession) {
          if (profession === 'actor') {
            searchParams.push(`profession=Актер`);
          } else if (profession === 'director') {
            searchParams.push(`profession=Режиссер`);
          }
        }
        if (name) {
          searchParams.push(`name=${name}`);
        }
        return {
          url: `persons/search?${searchParams.join('&')}`,
        };
      },
    }),
  }),
});

export const { useGetPersonByNameQuery } = searchApi;
