import React, { Component } from "react";
import { Route } from "react-router-dom";

import CategoryPage from "../category/category.component";
import CategoriesOverview from "../../components/categories-overview/categories-overview.component";

class CategoriesPage extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <Route exact path={`${match.path}`} component={CategoriesOverview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
      </div>
    );
  }
}

export default CategoriesPage;
