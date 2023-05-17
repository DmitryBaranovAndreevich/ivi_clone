export interface IReviews {
  id: string;
  title: string;
  text: string;
  rating: number;
  userId: number;
  filmId: number;
}

export type TAddReview = {
  title: string;
  text: string;
};
