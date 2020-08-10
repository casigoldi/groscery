import styled from "styled-components";

export const CategoryEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 20%;
  margin: 10px;
  background-color: #fff;
  min-width: 200px;
`;

export const CategoryEntryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const CategoryEntryContent = styled.div`
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
    background-color: blue;
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
