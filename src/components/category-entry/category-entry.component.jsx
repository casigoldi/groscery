import React from "react";

import {
  CategoryEntryContainer,
  CategoryEntryImage,
  CategoryEntryContent,
  CategoryEntryHeadline,
  CategoryEntryDescription,
  CategoryEntryType,
  CategoryEntryLink,
} from "./category-entry.styles";

const CategoryEntry = (props) => {
  const { title, description, type, imageUrl } = props;

  return (
    <CategoryEntryContainer>
      <CategoryEntryImage src={imageUrl} alt={title}></CategoryEntryImage>
      <CategoryEntryContent>
        <CategoryEntryHeadline>{title}</CategoryEntryHeadline>
        <CategoryEntryDescription>
          {description.substring(0, 40)} {description.length > 40 ? "…" : ""}
        </CategoryEntryDescription>
        <CategoryEntryType className={type}>{type}</CategoryEntryType>
        <CategoryEntryLink>> More info (coming soon)</CategoryEntryLink>
      </CategoryEntryContent>
    </CategoryEntryContainer>
  );
};

export default CategoryEntry;
