import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  height: 100%;
  min-height: 460px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  margin: 0;
  color: #222;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  min-height: calc(1.4em * 4);
  text-align: justify;
`;

export const Ingredients = styled.p`
  font-size: 0.85rem;
  color: #444;
  line-height: 1.4;
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  min-height: calc(1.4em * 3);
  text-align: justify;
`;

export const Instructions = styled.p`
  font-size: 0.85rem;
  color: #444;
  line-height: 1.4;
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  min-height: calc(1.4em * 3);
  text-align: justify;
`;

export const Rating = styled.div`
  font-weight: bold;
  color: #ff9900;
  font-size: 0.95rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.85rem;
  color: #333;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Label = styled.span`
  font-weight: 600;
  margin-right: 4px;
  color: #222;
`;
