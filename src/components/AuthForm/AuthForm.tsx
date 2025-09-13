import { FC } from "react";
import {
  ButtonSubmit,
  ErrMsg,
  FieldStyled,
  FormRegister,
  FormWrapper,
  LabelStyled,
  NavLinkStyled,
  WrapperNav,
} from "./AuthForm.styled";
import { Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { signin, signup } from "../../redux/api";
import { IUserSignup } from "../../types/authType";
import { signinSchema, signupSchema } from "../../validations/authValidation";

export const AuthForm: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const initialValues = isSignup
    ? {
        userName: "",
        email: "",
        password: "",
      }
    : {
        email: "",
        password: "",
      };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={isSignup ? signupSchema : signinSchema}
      onSubmit={(values) => {
        if (isSignup) {
          dispatch(signup(values as IUserSignup));
        } else {
          dispatch(signin(values));
        }

        navigate("/dashboard");
      }}
    >
      <FormWrapper>
        <WrapperNav>
          <NavLinkStyled to="/signup">Реєстрація</NavLinkStyled>
          <NavLinkStyled to="/signin">Логін</NavLinkStyled>
        </WrapperNav>

        <FormRegister>
          {isSignup && (
            <LabelStyled>
              <FieldStyled name="userName" placeholder="Name" />
              <ErrMsg component="div" name="userName" />
            </LabelStyled>
          )}

          <LabelStyled>
            <FieldStyled name="email" type="email" placeholder="Email" />
            <ErrMsg component="div" name="email" />
          </LabelStyled>

          <LabelStyled>
            <FieldStyled
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrMsg component="div" name="password" />
          </LabelStyled>

          <ButtonSubmit type="submit">
            {isSignup ? "Sign Up" : "Sign In"}
          </ButtonSubmit>
        </FormRegister>
      </FormWrapper>
    </Formik>
  );
};
