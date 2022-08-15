import { BUY_ICE } from "./icecreamType";

const initialState = {
  icecream: 25,
};

const iceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        icecream: state.icecream - action.payload,
      };
    default:
      return state;
  }
};
export default iceReducer;
