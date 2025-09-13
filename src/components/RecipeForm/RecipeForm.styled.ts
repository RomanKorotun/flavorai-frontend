import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";

export const FormWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  border: 1px solid #71736f;
  background-color: ${({ theme }) => theme.bgColors.secondaryBgColor};
  overflow: auto;
  width: 90%;

  @media only screen and (max-width: 427px) {
    padding: 20px;
  }

  @media only screen and (min-width: 428px) {
    padding: 30px;
  }

  @media only screen and (min-width: 470px) {
    width: 450px;
  }
`;

export const FormRegister = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  position: relative;
  margin-bottom: 14px;
`;

export const FieldStyled = styled(Field)`
  background-color: ${({ theme }) => theme.bgColors.primaryBgColor};
  border: 1px solid ${({ theme }) => theme.colors.fieldFormColor};
  color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 10px;
  padding-left: 12px;
  height: 38px;
  width: 100%;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const TextAreaStyled = styled(Field)`
  background-color: ${({ theme }) => theme.bgColors.primaryBgColor};
  border: 1px solid ${({ theme }) => theme.colors.fieldFormColor};
  color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 10px;
  padding: 10px 12px;
  width: 100%;
  font-size: 16px;
  line-height: 1.4;
  height: 100px;
  resize: none;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const NumberFieldStyled = styled(Field)`
  background-color: ${({ theme }) => theme.bgColors.primaryBgColor};
  border: 1px solid ${({ theme }) => theme.colors.fieldFormColor};
  color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 10px;
  padding-left: 12px;
  height: 38px;
  width: 100%;
  font-size: 16px;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  font-size: 13px;
  position: absolute;
  bottom: -16px;
  left: 5px;
  color: ${({ theme }) => theme.colors.errorColor};
`;

export const ButtonSubmit = styled.button`
  padding-top: 16px;
  padding-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgColors.accentBgColor};
  border: none;
  transition: transform 250ms, background-color 250ms;

  &:hover,
  &:focus {
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.bgColors.activeAccentBgColor};
  }
`;

export const Error = styled.div`
  position: absolute;
  bottom: -18px;
  left: 5px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.errorColor};
`;
