// import { reviewApi } from './reviewApi';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from '../../service/getCookie';
import { TAddReview } from '../../type/TReviews';

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
    // prepareHeaders: (headers, { getState, endpoint }) => {
    //   const token = getCookie('token');
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (build) => ({
    addReview: build.mutation<TAddReview, { review: TAddReview; filmId: number }>({
      query: ({ review, filmId }) => {
        debugger;
        return {
          url: `films/${filmId}`,
          method: 'POST',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlcmFAZ21haWwuY29tIiwiaWQiOjIsInBob25lIjoiODkyNzAwMDAwMDAiLCJyb2xlcyI6W10sImlhdCI6MTY4NDMxMzQyMSwiZXhwIjoxNjg0Mzk5ODIxfQ.6evPm_XBsrXQNqGxAbKrU3eDkOmYz-SPXx1t9RCtJbo`,
          },
          body: review,
        };
      },
    }),
    addReviewForReview: build.mutation<
      TAddReview,
      { review: TAddReview; filmId: number; reviewId: number }
    >({
      query: ({ review, filmId, reviewId }) => {
        debugger;
        return {
          url: `films/${filmId}/review/${reviewId}`,
          method: 'POST',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlcmFAZ21haWwuY29tIiwiaWQiOjIsInBob25lIjoiODkyNzAwMDAwMDAiLCJyb2xlcyI6W10sImlhdCI6MTY4NDMxMzQyMSwiZXhwIjoxNjg0Mzk5ODIxfQ.6evPm_XBsrXQNqGxAbKrU3eDkOmYz-SPXx1t9RCtJbo`,
          },
          body: review,
        };
      },
    }),
  }),
});

export const { useAddReviewMutation, useAddReviewForReviewMutation } = reviewApi;
