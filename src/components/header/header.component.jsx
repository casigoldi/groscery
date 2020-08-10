import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <NavLink exact to="/">
      <span>Logo</span>
    </NavLink>
    <NavLink exact to="/categories/fresh">
      Some category
    </NavLink>
    <NavLink exact to="/categories/frozen">
      Another category
    </NavLink>
    <NavLink exact to="/categories/drinks">
      Awesome category
    </NavLink>
    <NavLink exact to="/categories/">
      All categories
    </NavLink>
  </div>
);

export default Header;
