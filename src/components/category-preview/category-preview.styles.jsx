import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: stretch;
  background-color: #f4f4f4;
  padding: 15px;
  margin-bottom: 60px;
`;

export const CategoryPreviewHeadline = styled.h2`
  font-size: 5vw;
  text-transform: uppercase;
  margin-bottom: 0;
  line-height: 0.7em;

  a {
    color: #f4f4f4;
    text-decoration: none;
  }
`;
