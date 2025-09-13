import { styled, createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyled = createGlobalStyle`

input:-webkit-autofill {
  box-shadow: 0 0 0 1000px ${({ theme }) =>
    theme.bgColors.primaryBgColor} inset;
  -webkit-text-fill-color: ${({ theme }) => theme.colors.primaryColor};
  }

#root {
  margin: 0 auto;
  text-align: center;
}

body {
  font-family: "Inter", sans-serif;
  margin: 0;
  background-image: url("https://images.unsplash.com/photo-1504674900247-0877df9cc836"), linear-gradient(#2c2c2c, #1a1a1a);
  background-size: cover;
  background-position: center;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}

ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
}

a {
   text-decoration: none;
}

img {
    display: block;
}

button {
  cursor:pointer
}
`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  min-width: 320px;
  max-width: 1200px;
`;

export const Section = styled.section`
  min-height: 100vh;
  z-index: 1;
  padding-top: 26px;
  padding-top: 125px;
`;
