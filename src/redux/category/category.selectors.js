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

export const selectFacets = (categoryId) =>
  createSelector(selectCategory(categoryId), (category) => category.facets);

export const selectVisibleEntries = (categoryId) =>
  createSelector(
    [selectCategory(categoryId), selectFacets(categoryId)],
    (category, facets) => {
      const activeFacets = facets
        .filter((facet) => facet.active)
        .map((facet) => facet.id);

      return activeFacets.length === 0
        ? category.entries
        : category.entries.filter((entry) => activeFacets.includes(entry.type));
    }
  );
