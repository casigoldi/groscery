import React from "react";
import { connect } from "react-redux";

import { selectCategoriesOverview } from "../../redux/category/category.selectors";
import { createStructuredSelector } from "reselect";
import CategoryPreview from "../category-preview/category-preview.component";

const CategoriesOverview = (props) => {
  const { categories } = props;

  return (
    <div>
      {categories.map(({ id, ...category }) => (
        <CategoryPreview key={id} {...category} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesOverview,
});

export default connect(mapStateToProps)(CategoriesOverview);
