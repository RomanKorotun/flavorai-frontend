import { FC } from "react";
import { SvgStar } from "./StarRating.styles";
import { IStarRatingComment } from "../../types/ratingType";

export const StarRating: FC<IStarRatingComment> = ({
  totalStars,
  selectedStars,
}) => {
  return (
    <div style={{ display: "flex", gap: "6px" }}>
      {[...Array(totalStars)].map((_, index) => (
        <SvgStar key={index} $active={selectedStars > 0} viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </SvgStar>
      ))}
    </div>
  );
};
