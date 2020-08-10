import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <NavLink exact to="/">
      <span>Logo</span>
    </NavLink>
    <NavLink exact to="/categories/1">
      Some category
    </NavLink>
    <NavLink exact to="/categories/2">
      Another category
    </NavLink>
    <NavLink exact to="/categories/3">
      Awesome category
    </NavLink>
  </div>
);

export default Header;
