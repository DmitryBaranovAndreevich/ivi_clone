import ReviewSlice, { reviewSlice, TReviewSliceInitialState } from '../reducers/ReviewSlice';

describe('reviewReducer', () => {
  const state: TReviewSliceInitialState = {
    treeReviews: [],
    reviews: {},
    reviewForFilm: {},
    reviewForReview: {},
  };
  it('searchMain should be set correct', async () => {
    // const initialState: TReviewSliceInitialState = { ...state, treeReviews: '' };
    // const action = reviewSlice.actions.setTreeReviews({ treeReviews: 'test' });
    // const expectedState: TReviewSliceInitialState = { ...state, treeReviews: 'test' };
    // expect(ReviewSlice(initialState, action)).toEqual(expectedState);
  });
});
