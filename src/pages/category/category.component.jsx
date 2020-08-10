import React from "react";

const CategoriesPage = (props) => {
  return (
    <div>
      <h1>Category {props.match.params.categoryId}</h1>
    </div>
  );
};

export default CategoriesPage;
