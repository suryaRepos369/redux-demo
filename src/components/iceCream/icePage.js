import React from "react";
import { buyCake } from "../Redux";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
const IcePage = () => {
  const cakedata = useSelector((state) => state.cake.cakes);
  const dispatch = useDispatch();
  const buy = () => {
    dispatch(buyCake());
  };

  return (
    <div>
      <h1>welcome to the Cake shop </h1>
      <h2>Total Available Cake users is ::{cakedata} </h2>
      <button onClick={buy}> Buy Cake</button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cakes: state.cakes,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyCake: () => dispatch(buyCake()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(IcePage);
export default IcePage;
