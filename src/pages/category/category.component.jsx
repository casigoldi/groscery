import { connect } from "react-redux";
import {
  selectCategory,
  selectVisibleEntries,
  selectFacets,
} from "../../redux/category/category.selectors";

import CategoryEntriesFilter from "../../components/category-entries-filter/category-entries-filter.component";
import { setVisibilityFilter } from "../../redux/category/category.actions";

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
  entries: selectVisibleEntries(ownProps.match.params.categoryId)(state),
  facets: selectFacets(ownProps.match.params.categoryId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  setVisibility: (filter, id) => dispatch(setVisibilityFilter(filter, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryEntriesFilter);
