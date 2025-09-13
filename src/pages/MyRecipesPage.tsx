import { FC, useEffect } from "react";
import { Container, Section } from "../GlobaStyles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getMyRecipes } from "../redux/api";
import { RecipeList } from "../components/RecipeList/RecipeList";

const MyRecipesPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const recipes = useSelector((state: RootState) => state.recipe.recipes);

  useEffect(() => {
    dispatch(getMyRecipes());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <RecipeList recipes={recipes} />
      </Container>
    </Section>
  );
};

export default MyRecipesPage;
