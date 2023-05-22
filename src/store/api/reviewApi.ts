// import { reviewApi } from './reviewApi';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from '../../service/getCookie';
import { TAddReview } from '../../type/TReviews';

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
    credentials: 'include',
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
    addReview: build.mutation<TAddReview, { review: TAddReview; filmId: number }>({
      query: ({ review, filmId }) => {
        return {
          url: `films/${filmId}`,
          method: 'POST',
          body: review,
        };
      },
    }),
    addReviewForReview: build.mutation<
      TAddReview,
      { review: TAddReview; filmId: number; reviewId: number }
    >({
      query: ({ review, filmId, reviewId }) => {
        return {
          url: `films/${filmId}/review/${reviewId}`,
          method: 'POST',
          body: review,
        };
      },
    }),
  }),
});

export const { useAddReviewMutation, useAddReviewForReviewMutation } = reviewApi;
