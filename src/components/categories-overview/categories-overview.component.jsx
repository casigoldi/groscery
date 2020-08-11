import React from "react";
import { connect } from "react-redux";

import {
  selectCategoriesOverview,
  selectCategoryIsLoading,
} from "../../redux/category/category.selectors";
import { createStructuredSelector } from "reselect";
import CategoryPreview from "../category-preview/category-preview.component";

import { CategoriesOverviewContainer } from "./categories-overview.styles";
import WithSpinner from "../with-spinner/with-spinner.component";
import { compose } from "redux";

const CategoriesOverview = (props) => {
  const { categories } = props;

  return (
    <CategoriesOverviewContainer>
      {categories.map(({ id, ...category }) => (
        <CategoryPreview key={id} {...category} />
      ))}
    </CategoriesOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectCategoryIsLoading,
  categories: selectCategoriesOverview,
});

const CategoriesPageOverviewContainer = compose(
  connect(mapStateToProps, null),
  WithSpinner
)(CategoriesOverview);

export default CategoriesPageOverviewContainer;
