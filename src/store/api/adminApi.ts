import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFilm, TFilmAdding } from '../../type/TFilm';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
  }),
  endpoints: (build) => ({
    addFilmById: build.query<IFilm[], { id: string | undefined }>({
      query: ({ id }) => {
        return {
          url: `/parse/${id}`,
        };
      },
    }),
    addFilmSelf: build.mutation<IFilm[], { filmData: TFilmAdding }>({
      query: ({ filmData }) => {
        return {
          url: `/films`,
          method: 'POST',
          body: filmData,
        };
      },
    }),
    deleteFilm: build.mutation<IFilm[], { id: string | undefined }>({
      query: ({ id }) => {
        return {
          url: `/films/${id}`,
          method: 'DELETE',
        };
      },
    }),
    changeFilmName: build.mutation<IFilm[], { id: string; newNameFilm: string }>({
      query: ({ id, newNameFilm }) => {
        return {
          url: `/films/${id}`,
          method: 'PUT',
          body: { name: newNameFilm },
        };
      },
    }),
    addGenreToFilm: build.mutation<IFilm[], { id: string; genre: string }>({
      query: ({ id, genre }) => {
        return {
          url: `/films/${id}/add/genre`,
          method: 'POST',
          body: { name: genre },
        };
      },
    }),
    addNewGenres: build.mutation<IFilm[], { nameGenre: string; englishNameGenre: string }>({
      query: ({ nameGenre, englishNameGenre }) => {
        return {
          url: `/genres`,
          method: 'POST',
          body: { name: nameGenre, englishName: englishNameGenre },
        };
      },
    }),
    changeGenreName: build.mutation<IFilm[], { id: string; newNameGenre: string }>({
      query: ({ id, newNameGenre }) => {
        return {
          url: `/genres/${id}`,
          method: 'PUT',
          body: { name: newNameGenre },
        };
      },
    }),
    deleteGenre: build.mutation<IFilm[], { id: string }>({
      query: ({ id }) => {
        return {
          url: `/genres/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useAddFilmByIdQuery,
  useAddFilmSelfMutation,
  useDeleteFilmMutation,
  useChangeFilmNameMutation,
  useAddGenreToFilmMutation,
  useAddNewGenresMutation,
  useChangeGenreNameMutation,
  useDeleteGenreMutation,
} = adminApi;
