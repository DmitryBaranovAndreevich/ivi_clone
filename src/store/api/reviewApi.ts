import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TAddReview } from '../../type/TReviews';

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/users/',
  }),
  endpoints: (build) => ({
    addReview: build.mutation<TAddReview, { review: TAddReview; filmId: number }>({
      query: ({ review, filmId }) => {
        return {
          url: `/reviews/add/${filmId}`,
          method: 'POST',
          body: review,
        };
      },
    }),
  }),
});

export const { useAddReviewMutation } = reviewApi;
