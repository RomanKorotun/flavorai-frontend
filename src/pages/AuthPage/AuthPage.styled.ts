import styled from "styled-components";

export const AuthSection = styled.section`
  display: flex;
  align-items: center;
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 650px;
`;

export const Title = styled.h1`
  font-size: 50;
  @media screen and (max-width: 380px) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  font-weight: 700;
  @media screen and (max-width: 380px) {
    font-size: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 260px;
`;
