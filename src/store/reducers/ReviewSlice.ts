import { IReviews } from './../../type/TReviews';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TReviewUser } from '../../type/type';

export type TTreeReviews = {
  review: IReviews;
  childrenReviews?: Array<TTreeReviews>;
};

export type TReviewSliceInitialState = {
  treeReviews: Array<TTreeReviews>;
  reviews: {
    review?: IReviews;
    child?: Array<IReviews>;
  };
  reviewForFilm: TReviewUser;
  reviewForReview: TReviewUser;
};

const reviewSliceInitialState: TReviewSliceInitialState = {
  treeReviews: [],
  reviews: {},
  reviewForFilm: JSON.parse(localStorage.getItem('reviewForFilm') || '{}'),
  reviewForReview: JSON.parse(localStorage.getItem('reviewForReview') || '{}'),
};

export const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState: reviewSliceInitialState,
  reducers: {
    setTreeReviews(state, action: PayloadAction<{ treeReviews: Array<TTreeReviews> }>) {
      state.treeReviews = action.payload.treeReviews;
    },
    setReviewForFilm(
      state,
      action: PayloadAction<{ filmId: number; reviewObj: { title: string; text: string } }>
    ) {
      state.reviewForFilm[action.payload.filmId] = {
        title: action.payload.reviewObj.title,
        text: action.payload.reviewObj.text,
      };
      localStorage.setItem('reviewForFilm', JSON.stringify(state.reviewForFilm));
    },
    // addOneMainReviewToTree(
    //   state,
    //   action: PayloadAction<{ reviewObj: { title: string; text: string } }>
    // ) {
    //   state.treeReviews = action.payload.treeReviews;
    // },
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
