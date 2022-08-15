import React from "react";
import { fetchusersCall } from "../Redux/users/userActions";
import { useDispatch, useSelector } from "react-redux";
const Users = () => {
  const dispatch = useDispatch();
  const userArr = useSelector((state) => state.user);
  console.log("userArr:", userArr);
  const loading = {
    backgroundColor: "red",
    color: "blue",
    padding: "40px",
  };

  return (
    <>
      <h1>Welcome to the Json placeHolder for the Users data population</h1>
      <button
        onClick={() => {
          dispatch(fetchusersCall());
        }}
      >
        Click to fetch users
      </button>

      {userArr.loading ? (
        <div style={loading}>Page is Loading PLease wait</div>
      ) : (
        <div style={{ padding: "10px", backgroundColor: "skyblue" }}>
          User data{" "}
        </div>
      )}
      {userArr.error ? (
        <div style={{ backgroundColor: "red", padding: "40px" }}>
          Error in fetching data
        </div>
      ) : null}
      {userArr.users.map((data) => (
        <div>{data}</div>
      ))}
    </>
  );
};

export default Users;
