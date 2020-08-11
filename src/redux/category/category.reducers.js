import CategoryActionTypes from "./category.types";

const INITIAL_STATE = {
  categories: [],
  loaded: false,
  isPending: false,
};

const setCategoryFacets = (state, action) => {
  const category = state.categories[action.categoryId];
  const facets = category.facets.map((facet) =>
    facet.id === action.facet.id ? { ...facet, active: !facet.active } : facet
  );
  return {
    ...state,
    categories: {
      ...state.categories,
      [action.categoryId]: {
        ...category,
        facets: [...facets],
      },
    },
  };
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryActionTypes.REQUEST_CATEGORIES_PENDING:
      return Object.assign({}, state, { isPending: true, loaded: false });
    case CategoryActionTypes.REQUEST_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        categories: action.payload,
        loaded: true,
        isPending: false,
      });
    case CategoryActionTypes.REQUEST_CATEGORIES_FAILED:
      return CategoryActionTypes.assign({}, state, {
        categories: action.payload,
        loaded: true,
        isPending: false,
      });
    case CategoryActionTypes.SET_CATEGORY_FACETS:
      return setCategoryFacets(state, action);
    default:
      return state;
  }
};

export default categoryReducer;
