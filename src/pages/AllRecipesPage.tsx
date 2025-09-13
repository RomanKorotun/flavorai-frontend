import { FC, useEffect } from "react";
import { Container, Section } from "../GlobaStyles";
import { RecipeList } from "../components/RecipeList/RecipeList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getAllRecipes } from "../redux/api";
import { SearchBar } from "../components/SearchBar/SearchBar";

const AllRecipesPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const recipes = useSelector((state: RootState) => state.recipe.recipes);

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);
  return (
    <Section>
      <Container>
        <SearchBar />
        <RecipeList recipes={recipes} />
      </Container>
    </Section>
  );
};

export default AllRecipesPage;
