import styled from "styled-components";
import { Link } from "react-router-dom";

export const TeaserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 25%;
  margin: 0 10px 15px;
  height: 400px;
  min-width: 300px;
`;

export const TeaserBackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TeaserContent = styled.div`
  padding: 25px;
  position: absolute;
  background-color: #fff;
  text-align: center;
`;

export const TeaserContentTitle = styled.span`
  font-size: 30px;
  display: block;
  padding: 0 15px 15px;
`;

export const TeaserContentLink = styled(Link)`
  display: block;
  padding: 15px;
  background-color: #000;
  text-transform: uppercase;
  color: #fff;
`;
