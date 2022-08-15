import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cakeReducer from "./cake/cakeReducer";
import { rootReducer } from "./rootReducers";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Logger, thunk))
);
export default store;
