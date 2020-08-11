import styled from "styled-components";

export const CategoryEntryContainer = styled.div`
  flex: 1 1 50%;
  min-width: 250px;
  padding: 10px;

  @media only screen and (min-width: 760px) {
    flex: 0 1 25%;
  }
`;

export const CategoryEntryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const CategoryEntryContent = styled.div`
  background-color: #fff;
  position: relative;
  padding: 15px;
`;

export const CategoryEntryHeadline = styled.span`
  font-size: 24px;
  padding-bottom: 10px;
  display: block;
`;

export const CategoryEntryDescription = styled.span`
  display: block;
`;

export const CategoryEntryType = styled.span`
  position: absolute;
  top: 15px;
  right: 10px;
  color: white;
  font-size: 11px;
  border-radius: 3px;
  padding: 5px;

  background-color: grey;

  &.meat {
    background-color: red;
  }

  &.fish {
    background-color: blue;
  }

  &.fruits {
    background-color: green;
  }

  &.alcohol {
    background-color: black;
  }

  &.convience {
    background-color: orange;
  }
`;

export const CategoryEntryLink = styled.a`
  display: block;
  padding-top: 30px;
  font-size: 12px;
`;
