import styled from "styled-components";

export const CategoryFilters = styled.div`
  background-color: #ccc;
  padding: 15px 15px 0;
`;

export const CategoryFilterButton = styled.button`
  padding: 5px 7px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #fff;
  border-radius: 3px;
  background-color: grey;
  border: 0;
  outline: 0;
  opacity: ${(props) => (props.buttonActive ? "1" : "0.5")};

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
