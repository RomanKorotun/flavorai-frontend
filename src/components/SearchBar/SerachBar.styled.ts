import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 16px;
  width: 100%;
  max-width: 600px;
  margin-left: 0;
  margin-right: auto;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 45px;
  min-width: 200px;
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primaryColor};
  background-color: ${({ theme }) => theme.bgColors.secondaryBgColor || "#fff"};
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.3);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;

  button {
    height: 45px;
    padding: 10px 36px;
    font-size: 0.95rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: #fff;
    transition: background-color 0.2s ease;
  }

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;
