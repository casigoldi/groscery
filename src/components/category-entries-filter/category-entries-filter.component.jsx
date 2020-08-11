import React from "react";
import CategoryEntry from "../category-entry/category-entry.component";

import {
  CategoryFilters,
  CategoryFilterButton,
} from "./category-entries-filter.styles";
import {
  CategoryPreviewHeadline,
  CategoryPreviewContainer,
} from "../category-preview/category-preview.styles";

const CategoryEntriesFilter = ({
  category,
  entries,
  facets,
  setVisibility,
}) => {
  const handleClick = (facet) => {
    setVisibility(facet, category.id);
  };

  return (
    <div>
      <CategoryPreviewHeadline>{category.title}</CategoryPreviewHeadline>
      <CategoryFilters>
        {facets.map((facet) => (
          <CategoryFilterButton
            className={`${facet.id}`}
            onClick={() => handleClick(facet)}
            buttonActive={facet.active}
            key={facet.id}
          >
            {facet.name}
          </CategoryFilterButton>
        ))}
      </CategoryFilters>
      <CategoryPreviewContainer>
        {entries.length > 0 ? (
          entries.map(({ id, ...entry }) => (
            <CategoryEntry key={id} {...entry} />
          ))
        ) : (
          <p>No items available</p>
        )}
      </CategoryPreviewContainer>
    </div>
  );
};

export default CategoryEntriesFilter;
