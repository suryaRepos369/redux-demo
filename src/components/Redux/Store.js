import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cakeReducer from "./cake/cakeReducer";
import { rootReducer } from "./rootReducers";
import { fetchPosts } from "./postSlice/posts";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Logger, thunk))
);
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});
unsubscribe();
export default store;
