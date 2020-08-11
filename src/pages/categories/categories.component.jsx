import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CategoryPage from "../category/category.component";
import CategoriesOverview from "../../components/categories-overview/categories-overview.component";
import { requestCategoriesIfNeeded } from "../../redux/category/category.actions";

class CategoriesPage extends Component {
  componentDidMount() {
    this.props.onRequestCategories();
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestCategories: () => dispatch(requestCategoriesIfNeeded()),
  };
};

export default connect(null, mapDispatchToProps)(CategoriesPage);
