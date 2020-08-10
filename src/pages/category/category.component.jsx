import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/category/category.selectors";

const CategoriesPage = ({ match, category }) => {
  if (!category) {
    return <h1>Category "{match.params.categoryId}" not found</h1>;
  }

  const { title, entries } = category;
  return (
    <div>
      <h1>{title}</h1>
      {entries.map((entry) => (
        <div key={entry.id}>{entry.title}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoriesPage);
