import { createSelector } from "reselect";

const selectCategories = (state) => state.categories;

export const selectCategoriesOverview = createSelector(
  [selectCategories],
  (categories) =>
    categories ? Object.keys(categories).map((key) => categories[key]) : []
);

export const selectCategory = (categoryId) =>
  createSelector([selectCategories], (categories) =>
    categories ? categories[categoryId] : null
  );
