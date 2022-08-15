const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxlogger = require("redux-logger");
const logger = reduxlogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE = "BUY_ICE";
const BUY_BREAD = "BUY_BREAD";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Firest redux action",
  };
}
function buyIce() {
  return {
    type: BUY_ICE,
    info: "Firest redux action",
  };
}
function buybread() {
  return {
    type: BUY_BREAD,
    info: "Firest redux action",
  };
}

const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  icecream: 10,
};

const initialBreadState = {
  bread: 10,
};

const reducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const reducerIce = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        icecream: state.icecream - 1,
      };
    default:
      return state;
  }
};

const reducerBread = (state = initialBreadState, action) => {
  switch (action.type) {
    case BUY_BREAD:
      return {
        ...state,
        bread: state.bread - 1,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  cake: reducer,
  ice: reducerIce,
  bread: reducerBread,
});

const store = createStore(rootReducers, applyMiddleware(logger));
// const unsubscribe = store.subscribe(() =>
//   console.log("updated state ", store.getState())
// );
// console.log("store inital value :", store.getState());

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
// unsubscribe();
