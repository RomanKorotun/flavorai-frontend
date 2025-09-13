import { FC, useState } from "react";
import { IRecipe } from "../../types/recipeType";
import {
  Card,
  Image,
  Title,
  Description,
  Ingredients,
  Instructions,
  InfoRow,
  InfoItem,
  Footer,
  Section,
  Label,
  Rating,
} from "./RecipeCard.styled";
import { StarRating } from "../StarRating/StarRating";
import { ModalReview } from "../RatingModal/RatingModal";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface RecipeCardProps {
  recipe: IRecipe;
}

export const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
  const [isOpenReviewModal, setIsOpenReviewModal] = useState<boolean>(false);

  const updatedRecipe = useSelector((state: RootState) =>
    state.recipe.recipes.find((r) => r.id === recipe.id)
  );

  const toggleRatingModal = () => {
    setIsOpenReviewModal((prevState: boolean) => !prevState);
  };
  return (
    <Card>
      <Image src={recipe.imageUrl} alt={recipe.title} />
      <Section>
        <Title>{recipe.title}</Title>
        <Description>{recipe.description}</Description>
        <Ingredients>
          <strong>Інгредієнти:</strong> {recipe.ingredients}
        </Ingredients>
        <Instructions>
          <strong>Інструкції:</strong> {recipe.instructions}
        </Instructions>
      </Section>
      <InfoRow>
        <InfoItem>
          <Label>Час приготування:</Label> {recipe.cookTime} хв
        </InfoItem>
        <InfoItem>
          <Label>Категорія:</Label> {recipe.category}
        </InfoItem>
        <InfoItem>
          <Label>Кухня:</Label> {recipe.cuisine}
        </InfoItem>
      </InfoRow>
      <Footer>
        <div onClick={toggleRatingModal}>
          <StarRating totalStars={1} selectedStars={recipe.rating} />
          <Rating>
            {updatedRecipe?.rating ? updatedRecipe.rating.toFixed(1) : "0"}
          </Rating>
        </div>
      </Footer>

      <ModalReview
        id={recipe.id}
        isOpenModal={isOpenReviewModal}
        onToggleModal={toggleRatingModal}
      />
    </Card>
  );
};
