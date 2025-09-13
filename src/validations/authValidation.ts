import * as Yup from "yup";

const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

export const signupSchema = Yup.object({
  userName: Yup.string()
    .required("Ім’я обов’язкове")
    .min(2, "Мінімум 2 символи"),
  email: Yup.string().email("Некоректний email").required("Email обов’язковий"),
  password: Yup.string()
    .required("Пароль обов’язковий")
    .matches(
      PASSWORD_REGEX,
      "Пароль має містити цифру, велику літеру і 6+ символів"
    ),
});

export const signinSchema = Yup.object({
  email: Yup.string().email("Некоректний email").required("Email обов’язковий"),
  password: Yup.string()
    .required("Пароль обов’язковий")
    .matches(
      PASSWORD_REGEX,
      "Пароль має містити цифру, велику літеру і 6+ символів"
    ),
});
