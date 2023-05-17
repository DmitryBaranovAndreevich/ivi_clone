export interface IReviews {
  id: number;
  title: string;
  text: string;
  rating: number;
  parentId: number;
  userId: number;
  filmId: number;
}

export type TAddReview = {
  title: string;
  text: string;
};
