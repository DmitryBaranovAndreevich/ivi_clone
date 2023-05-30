import { mockReviewObj, mockTreeReviews } from '../../mockData/mockTest';
import ReviewSlice, { reviewSlice, TReviewSliceInitialState } from '../reducers/ReviewSlice';

describe('reviewReducer', () => {
  const state: TReviewSliceInitialState = {
    treeReviews: [],
    reviews: {},
    reviewForFilm: {},
    reviewForReview: {},
  };
  it('treeReviews should be set correct', async () => {
    const initialState: TReviewSliceInitialState = { ...state, treeReviews: [] };
    const action = reviewSlice.actions.setTreeReviews({ treeReviews: mockTreeReviews });
    const expectedState: TReviewSliceInitialState = { ...state, treeReviews: mockTreeReviews };
    expect(ReviewSlice(initialState, action)).toEqual(expectedState);
  });
  it('reviewForFilm should be set correct', async () => {
    jest.spyOn(Storage.prototype, 'setItem');
    localStorage.setItem = jest.fn();
    const initialState: TReviewSliceInitialState = { ...state, reviewForFilm: {} };
    const action = reviewSlice.actions.setReviewForFilm({ filmId: 1, reviewObj: mockReviewObj });
    const expectedState: TReviewSliceInitialState = {
      ...state,
      reviewForFilm: { 1: mockReviewObj },
    };
    expect(ReviewSlice(initialState, action)).toEqual(expectedState);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('reviewForFilm should be called localStorage.setItem', async () => {
    jest.spyOn(Storage.prototype, 'setItem');
    localStorage.setItem = jest.fn();
    const initialState: TReviewSliceInitialState = { ...state, reviewForFilm: {} };
    const action = reviewSlice.actions.setReviewForFilm({ filmId: 1, reviewObj: mockReviewObj });
    ReviewSlice(initialState, action);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('setReviewForReview should be set correct', async () => {
    const initialState: TReviewSliceInitialState = { ...state, reviewForReview: {} };
    const action = reviewSlice.actions.setReviewForReview({
      reviewId: 1,
      reviewObj: mockReviewObj,
    });
    const expectedState: TReviewSliceInitialState = {
      ...state,
      reviewForReview: { 1: mockReviewObj },
    };
    expect(ReviewSlice(initialState, action)).toEqual(expectedState);
  });
  it('setReviewForReview should be called localStorage.setItem', async () => {
    jest.spyOn(Storage.prototype, 'setItem');
    localStorage.setItem = jest.fn();
    const initialState: TReviewSliceInitialState = { ...state, reviewForReview: {} };
    const action = reviewSlice.actions.setReviewForReview({
      reviewId: 1,
      reviewObj: mockReviewObj,
    });
    ReviewSlice(initialState, action);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
