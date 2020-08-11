import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: #ccc;
  padding: 15px 5px;
  margin-bottom: 60px;
`;

export const CategoryPreviewHeadline = styled.h2`
  font-size: 10vw;
  text-transform: uppercase;
  margin-bottom: 0;
  line-height: 0.7em;
  color: #ccc;
  margin-top: 15px;

  a {
    color: #ccc;
    text-decoration: none;
  }
`;
