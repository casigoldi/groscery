import React from "react";
import CategoryEntry from "../category-entry/category-entry.component";
import { Link } from "react-router-dom";

import {
  CategoryPreviewHeadline,
  CategoryPreviewContainer,
} from "./category-preview.styles";

const CategoryPreview = (props) => {
  const { id, title, url, entries } = props;

  return (
    <>
      <CategoryPreviewHeadline>
        <Link to={`${url}`}>{title}</Link>
      </CategoryPreviewHeadline>
      <CategoryPreviewContainer>
        {entries
          .filter((entry, index) => index < 4)
          .map(({ id, ...entry }) => (
            <CategoryEntry key={id} {...entry} />
          ))}
      </CategoryPreviewContainer>
    </>
  );
};

export default CategoryPreview;
