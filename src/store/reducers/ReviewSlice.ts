import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TReviewUser } from '../../type/type';

type TReviewSliceInitialState = {
  reviewUser: TReviewUser;
  reviewForReview: TReviewUser;
};

const reviewSliceInitialState: TReviewSliceInitialState = {
  reviewUser: JSON.parse(localStorage.getItem('reviewUser') || '{}'),
  reviewForReview: JSON.parse(localStorage.getItem('reviewForReview') || '{}'),
};

export const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState: reviewSliceInitialState,
  reducers: {
    addReviewUser(
      state,
      action: PayloadAction<{ filmId: number; reviewObj: { title: string; text: string } }>
    ) {
      state.reviewUser[action.payload.filmId] = {
        title: action.payload.reviewObj.title,
        text: action.payload.reviewObj.text,
      };
      localStorage.setItem('reviewUser', JSON.stringify(state.reviewUser));
    },
    setReviewForReview(
      state,
      action: PayloadAction<{ reviewId: number; reviewObj: { title: string; text: string } }>
    ) {
      state.reviewForReview[action.payload.reviewId] = {
        title: action.payload.reviewObj.title,
        text: action.payload.reviewObj.text,
      };
      localStorage.setItem('reviewForReview', JSON.stringify(state.reviewForReview));
    },
  },
});

export default reviewSlice.reducer;
