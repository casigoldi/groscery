import React from "react";
import { connect } from "react-redux";

import { selectCategoriesOverview } from "../../redux/category/category.selectors";
import { createStructuredSelector } from "reselect";
import CategoryPreview from "../category-preview/category-preview.component";

import { CategoriesOverviewContainer } from "./categories-overview.styles";

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
  categories: selectCategoriesOverview,
});

export default connect(mapStateToProps)(CategoriesOverview);
