import { TTreeReviews } from '../store/reducers/ReviewSlice';
import { IReviews } from '../type/TReviews';

const qqq = (
  treeReviews: Array<TTreeReviews>,
  childReviews: {
    [index: number]: Array<IReviews>;
  }
) => {
  treeReviews.map((treeReview) => {
    if (childReviews[treeReview.review.id]) {
      childReviews[treeReview.review.id].map((child) => {
        if (treeReview.childrenReviews) {
          treeReview.childrenReviews.push({ review: child });
        } else {
          treeReview.childrenReviews = [{ review: child }];
        }
      });
      delete childReviews[treeReview.review.id];
    }
    if (treeReview.childrenReviews) {
      qqq(treeReview.childrenReviews, childReviews);
    }
  });
};

export const makeTreeReviews = (reviews: Array<IReviews>) => {
  const treeReviews: Array<TTreeReviews> = [];
  const childReviews: {
    [index: number]: Array<IReviews>;
  } = {};
  reviews.map((review) => {
    if (!review.parentId) {
      treeReviews.push({ review });
    } else {
      if (childReviews[review.parentId]) {
        childReviews[review.parentId] = [...childReviews[review.parentId], review];
      } else {
        childReviews[review.parentId] = [review];
      }
    }
  });
  if (Object.keys(childReviews).length > 0) {
    qqq(treeReviews, childReviews);
  }
  return treeReviews;
};
