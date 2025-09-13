import { FC } from "react";
import {
  AuthContainer,
  AuthSection,
  ButtonWrapper,
  Description,
  Title,
} from "./AuthPage.styled";
import { Container } from "../../GlobaStyles";
import { useNavigate } from "react-router-dom";

const AuthPage: FC = () => {
  const navigate = useNavigate();
  return (
    <AuthSection>
      <Container>
        <AuthContainer>
          <Title>RecipeCloud</Title>
          <Description>
            Зберігай улюблені рецепти, створюй власні добірки та відкривай нові
            смаки щодня. Це твій особистий простір для кулінарного натхнення —
            від домашньої класики до гастроекспериментів. Все, що ти готуєш і
            любиш, завжди під рукою.
          </Description>
          <ButtonWrapper>
            <button onClick={() => navigate("/signup")}>Реєстрація</button>
            <button onClick={() => navigate("/signin")}>Логін</button>
          </ButtonWrapper>
        </AuthContainer>
      </Container>
    </AuthSection>
  );
};

export default AuthPage;
