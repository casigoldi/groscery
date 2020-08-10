import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <NavLink exact to="/">
      <span>Logo</span>
    </NavLink>
    <NavLink exact to="/categories/fresh">
      Fresh
    </NavLink>
    <NavLink exact to="/categories/frozen">
      Frozen
    </NavLink>
    <NavLink exact to="/categories/drinks">
      Drinks
    </NavLink>
    <NavLink exact to="/categories/">
      All categories
    </NavLink>
  </div>
);

export default Header;
