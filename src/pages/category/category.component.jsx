import { connect } from "react-redux";
import {
  selectCategory,
  selectVisibleEntries,
  selectFacets,
  selectCategoryIsLoading,
} from "../../redux/category/category.selectors";

import CategoryEntriesFilter from "../../components/category-entries-filter/category-entries-filter.component";
import { setVisibilityFilter } from "../../redux/category/category.actions";
import { compose } from "redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = (state, ownProps) => ({
  isLoading: selectCategoryIsLoading(state),
  category: selectCategory(ownProps.match.params.categoryId)(state),
  entries: selectVisibleEntries(ownProps.match.params.categoryId)(state),
  facets: selectFacets(ownProps.match.params.categoryId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  setVisibility: (filter, id) => dispatch(setVisibilityFilter(filter, id)),
});

const CategoryPageContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithSpinner
)(CategoryEntriesFilter);

export default CategoryPageContainer;
