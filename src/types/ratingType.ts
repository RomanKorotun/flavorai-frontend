export interface IStarRatingModal {
  totalStars: number;
  onStarClick: (index: number) => void;
  selectedStars: number;
}

export type IStarRatingComment = Omit<IStarRatingModal, "onStarClick">;

export interface IReview {
  id?: string;
  rating: number;
}
