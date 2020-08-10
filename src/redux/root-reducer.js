import teaserReducer from "./teaser/teaser.reducer";
import { combineReducers } from "redux";
import categoryReducer from "./category/category.reducers";

const rootReducers = combineReducers({
  teasers: teaserReducer,
  categories: categoryReducer,
});

export default rootReducers;
