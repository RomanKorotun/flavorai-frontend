import styled from "styled-components";

export const SvgStar = styled.svg<{ $active?: boolean }>`
  width: 24px;
  height: 24px;
  fill: ${({ $active }) => ($active ? "#ffc531" : "#ffffff")};
  stroke: #000000;
  stroke-width: 1.5;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
