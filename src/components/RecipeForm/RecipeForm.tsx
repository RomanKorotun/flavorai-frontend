import { Formik, Form } from "formik";
import {
  ButtonSubmit,
  ErrMsg,
  FieldStyled,
  FormRegister,
  FormWrapper,
  LabelStyled,
  TextAreaStyled,
} from "./RecipeForm.styled";
import { createRecipeSchema } from "../../validations/recipeValidation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../../redux/api";

export const RecipeForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    description: "",
    cookTime: 1,
    ingredients: "",
    instructions: "",
    category: "",
    cuisine: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createRecipeSchema}
      onSubmit={(values) => {
        dispatch(createRecipe(values));
        navigate("/dashboard/my-recipes");
      }}
    >
      <FormWrapper>
        <FormRegister as={Form}>
          <LabelStyled>
            <FieldStyled name="title" placeholder="Назва рецепта" />
            <ErrMsg component="div" name="title" />
          </LabelStyled>

          <LabelStyled>
            <TextAreaStyled
              name="description"
              placeholder="Опис рецепта"
              rows={4}
            />
            <ErrMsg component="div" name="description" />
          </LabelStyled>

          <LabelStyled>
            <FieldStyled
              name="cookTime"
              type="number"
              min="1"
              placeholder="Час приготування (хв)"
            />
            <ErrMsg component="div" name="cookTime" />
          </LabelStyled>

          <LabelStyled>
            <TextAreaStyled
              name="ingredients"
              placeholder="Інгредієнти"
              rows={4}
            />
            <ErrMsg component="div" name="ingredients" />
          </LabelStyled>

          <LabelStyled>
            <TextAreaStyled
              name="instructions"
              placeholder="Інструкції"
              rows={4}
            />
            <ErrMsg component="div" name="instructions" />
          </LabelStyled>

          <LabelStyled>
            <FieldStyled name="category" placeholder="Категорія" />
            <ErrMsg component="div" name="category" />
          </LabelStyled>

          <LabelStyled>
            <FieldStyled name="cuisine" placeholder="Кухня" />
            <ErrMsg component="div" name="cuisine" />
          </LabelStyled>

          <ButtonSubmit type="submit">Створити рецепт</ButtonSubmit>
        </FormRegister>
      </FormWrapper>
    </Formik>
  );
};
