import teaserReducer from "./teaser/teaser.reducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  teasers: teaserReducer,
});

export default rootReducers;
