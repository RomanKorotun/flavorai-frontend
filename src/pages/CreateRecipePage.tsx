import { FC } from "react";
import { Container, Section } from "../GlobaStyles";
import { RecipeForm } from "../components/RecipeForm/RecipeForm";

const MyRecipesPage: FC = () => {
  return (
    <Section>
      <Container>
        <RecipeForm />
      </Container>
    </Section>
  );
};

export default MyRecipesPage;
