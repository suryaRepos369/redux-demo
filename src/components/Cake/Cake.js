import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyice } from "../Redux/icecream/iceAction";
const Cake = () => {
  const dispatch = useDispatch();
  const icedata = useSelector((state) => state.icecream.icecream);
  const [number, setNumber] = React.useState("");

  return (
    <div>
      <h1>Welcome to the IceCream shop</h1>
      <h3>Total available Icecream is ::{icedata}</h3>
      <input
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
          e.target.value = 0;
        }}
        placeholder="enter the cakes needed"
      ></input>
      <button
        onClick={() => {
          dispatch(buyice(number));
          setNumber(0);
        }}
      >
        Buy {number} IceCreams
      </button>
    </div>
  );
};

export default Cake;
