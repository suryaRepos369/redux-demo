import { FETCH_USER_ERROR } from "./userType";
import { FETCH_USER_REQUEST } from "./userType";
import { FETCH_USER_SUCCESS } from "./userType";
import axios from "axios";

export const fetchuserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchuserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
export const fetchuserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
};

export const fetchusersCall = () => {
  console.log("called ");
  return (dispatch) => {
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
