import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TReviewUser } from '../../type/type';

type TReviewSliceInitialState = {
  reviewUser: TReviewUser;
};

const reviewSliceInitialState: TReviewSliceInitialState = {
  reviewUser: JSON.parse(localStorage.getItem('reviewUser') || '{}'),
};

export const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState: reviewSliceInitialState,
  reducers: {
    addReviewUser(state, action: PayloadAction<{ filmId: number; reviewText: string }>) {
      state.reviewUser[action.payload.filmId] = {
        text: action.payload.reviewText,
      };
      localStorage.setItem('reviewUser', JSON.stringify(state.reviewUser));
    },
  },
});

export default reviewSlice.reducer;
