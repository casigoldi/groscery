import { createSelector } from "reselect";

const selectTeasers = (state) => state.teasers;

export const selectTeaserHomepage = createSelector(
  [selectTeasers],
  (teasers) => teasers.homepage
);
