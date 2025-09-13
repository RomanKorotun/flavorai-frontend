import * as Yup from "yup";

export const createRecipeSchema = Yup.object({
  title: Yup.string()
    .required("Назва рецепта обов’язкова")
    .max(50, "Максимум 50 символів"),
  description: Yup.string()
    .required("Опис обов’язковий")
    .min(10, "Мінімум 10 символів"),
  cookTime: Yup.number()
    .typeError("Час має бути числом")
    .required("Час приготування обов’язковий")
    .min(1, "Мінімум 1 хвилина"),
  ingredients: Yup.string().required("Інгредієнти обов’язкові"),
  instructions: Yup.string().required("Інструкції обов’язкові"),
  category: Yup.string().required("Категорія обов’язкова"),
  cuisine: Yup.string().required("Кухня обов’язкова"),
});
