import { createSelector } from "reselect";

const selectCatalog = (state) => state.categories;
const selectCategories = (state) => state.categories.categories;

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
  createSelector(selectCategory(categoryId), (category) =>
    category ? category.facets : []
  );

export const selectCategoryIsLoading = createSelector(
  [selectCatalog],
  (catalog) => {
    return !catalog.loaded;
  }
);

export const selectVisibleEntries = (categoryId) =>
  createSelector(
    [selectCategory(categoryId), selectFacets(categoryId)],
    (category, facets) => {
      if (!(category && category.entries)) {
        return [];
      }
      const activeFacets = facets
        .filter((facet) => facet.active)
        .map((facet) => facet.id);

      return activeFacets.length === 0
        ? category.entries
        : category.entries.filter((entry) => activeFacets.includes(entry.type));
    }
  );
