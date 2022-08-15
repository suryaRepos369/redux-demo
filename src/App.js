import { red } from "@mui/material/colors";
import "./App.css";
import User from "./components/iceCream/icePage";
import { Provider } from "react-redux";
import store from "./components/Redux/Store";
import Icecream from "./components/Cake/Cake";
import Userdata from "./components/UserS/Users";
function App() {
  const style = {
    color: red,

    backgroundColor: "skyblue",
    padding: "4px",
  };

  return (
    <Provider store={store}>
      <div className="App">
        <h1 style={style}>Store method checking </h1>
        <User />
        <Icecream />
        <Userdata />
      </div>
    </Provider>
  );
}

export default App;
