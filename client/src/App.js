import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import Nevbar from "./pages/Nevbar";
import Home from "./pages/Home";
import HomeMedecin from "./pages/HomeMedecin";
import Alerts from "./components/Alerts";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nevbar />
        <Alerts />

        <Switch>
          <PrivateRoute exact path="/Home" component={Home}></PrivateRoute>
          <PrivateRoute
            exact
            path="/HomeMedecin"
            component={HomeMedecin}
          ></PrivateRoute>
          {/* <Route exact path="/about" component={About}></Route>
          <Route exact path="/register" component={Register}></Route> */}
          <Route exact path="/Login" component={Login}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
