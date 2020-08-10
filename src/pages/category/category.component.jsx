import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/category/category.selectors";
import CategoryEntry from "../../components/category-entry/category-entry.component";

const CategoriesPage = ({ match, category }) => {
  if (!category) {
    return <h1>Category "{match.params.categoryId}" not found</h1>;
  }

  const { title, entries } = category;
  return (
    <div>
      <h1>{title}</h1>
      {entries.map(({ id, ...entry }) => (
        <CategoryEntry key={id} {...entry} />
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoriesPage);
