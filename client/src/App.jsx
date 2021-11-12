import logo from "./logo.svg";
import "./App.css";
import Routes1 from "./Routes/Routes";
import Home from "./Pages/Home/Home";
import { Route, Switch } from "react-router-dom";
//import { Switch } from "react-router";
//import Switch from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* {<Routes1></Routes1>} */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
