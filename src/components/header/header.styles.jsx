import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderNavigation = styled.div`
  display: flex;
  text-align: right;
`;

export const HeaderNavigationLink = styled(NavLink)`
  display: none;
  padding: 15px;

  &.visibleMobile {
    display: block;
  }

  &.active {
    color: red;
  }

  @media only screen and (min-width: 500px) {
    display: block;
  }
`;
