import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.primaryColor};
`;
