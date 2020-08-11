import React from "react";
import { Link } from "react-router-dom";

import {
  HeaderContainer,
  HeaderNavigation,
  HeaderNavigationLink,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <HeaderNavigationLink as={Link} to="/" className="visibleMobile">
      <span>Gloscery</span>
    </HeaderNavigationLink>
    <HeaderNavigation>
      <HeaderNavigationLink exact to="/categories/fresh">
        Fresh
      </HeaderNavigationLink>
      <HeaderNavigationLink exact to="/categories/frozen">
        Frozen
      </HeaderNavigationLink>
      <HeaderNavigationLink exact to="/categories/drinks">
        Drinks
      </HeaderNavigationLink>
      <HeaderNavigationLink exact to="/categories/" className="visibleMobile">
        All categories
      </HeaderNavigationLink>
    </HeaderNavigation>
  </HeaderContainer>
);

export default Header;
