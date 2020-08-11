import CategoryActionTypes from "./category.types";

export const setVisibilityFilter = (facet, categoryId) => ({
  type: CategoryActionTypes.SET_CATEGORY_FACETS,
  facet,
  categoryId,
});

const requestCategories = () => (dispatch) => {
  dispatch({
    type: CategoryActionTypes.REQUEST_CATEGORIES_PENDING,
  });
  fetch(`https://my-json-server.typicode.com/casigoldi/foodapi/categories`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: CategoryActionTypes.REQUEST_CATEGORIES_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: CategoryActionTypes.REQUEST_CATEGORIES_FAILED,
        payload: error,
      })
    );
};

export const requestCategoriesIfNeeded = () => (dispatch, getState) => {
  const categories = getState().categories.categories;
  if (categories.length === 0) {
    return dispatch(requestCategories());
  } else if (categories.isPending) {
    return Promise.resolve();
  }
};
