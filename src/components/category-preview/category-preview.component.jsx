import React from "react";
import CategoryEntry from "../category-entry/category-entry.component";
import { Link } from "react-router-dom";

const CategoryPreview = (props) => {
  const { id, title, url, entries } = props;

  return (
    <div key={id}>
      <h1>
        <Link to={`${url}`}>{title}</Link>
      </h1>
      {entries
        .filter((entry, index) => index < 3)
        .map(({ id, ...entry }) => (
          <CategoryEntry key={id} {...entry} />
        ))}
    </div>
  );
};

export default CategoryPreview;
