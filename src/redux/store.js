import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducers from "./root-reducer";

const middlewares = [logger, thunkMiddleware];
const store = createStore(rootReducers, applyMiddleware(...middlewares));

export default store;
