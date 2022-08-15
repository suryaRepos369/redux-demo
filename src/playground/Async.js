const { useReducer } = require("react");
const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS = "FETCH_USERS";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

const fetchuserRequest = () => {
  return {
    type: FETCH_USERS,
  };
};
const fetchuserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
const fetchuserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
      };

      break;
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
      break;
    case FETCH_USER_ERROR:
      return {
        laoding: false,
        users: [],
        error: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

//action creators for the function with side effects and async functions

const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchuserRequest());

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.name);
        dispatch(fetchuserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchuserError(error.message));
      });
  };
};

const store = redux.createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUser());

export default store;
