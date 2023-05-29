import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_TO_FILMS } from '../../service/constans';

import { TGenreCountriesYears } from '../../type/type';
import { IFilm } from '../../type/TFilm';
import { IUser } from '../../type/TUser';
import { getCookie } from '../../service/getCookie';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_TO_FILMS,
    prepareHeaders: (headers, { getState, endpoint }) => {
      headers.set('Content-Type', 'application/json');
      const token = getCookie('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    authMe: build.query<IUser, ''>({
      query: () => {
        return { url: '/auth/me' };
      },
      transformResponse: (response: { user: IUser }): IUser => {
        return response.user;
      },
    }),
  }),
});

export const { useAuthMeQuery } = authApi;
