import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/category/category.selectors";
import CategoryEntry from "../../components/category-entry/category-entry.component";

import { CategoryContainer } from "./category.styles";

const CategoriesPage = ({ match, category }) => {
  if (!category) {
    return <h1>Category "{match.params.categoryId}" not found</h1>;
  }

  const { title, entries } = category;
  return (
    <CategoryContainer>
      {entries.map(({ id, ...entry }) => (
        <CategoryEntry key={id} {...entry} />
      ))}
    </CategoryContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoriesPage);
