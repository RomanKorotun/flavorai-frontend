import { FC } from "react";
import { IRecipe } from "../../types/recipeType";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { List, EmptyMessage } from "./RecipeList.styled";

interface RecipeListProps {
  recipes: IRecipe[];
}

export const RecipeList: FC<RecipeListProps> = ({ recipes }) => {
  if (recipes.length === 0) {
    return <EmptyMessage>Немає рецептів ...</EmptyMessage>;
  }

  return (
    <List>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </List>
  );
};
