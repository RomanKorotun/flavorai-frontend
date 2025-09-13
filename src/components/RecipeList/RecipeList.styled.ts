import styled from "styled-components";

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  padding: 16px 0;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 40px;
`;
