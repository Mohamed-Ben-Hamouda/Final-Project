import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import Home from "./pages/Home";
import HomeMedecin from "./pages/HomeMedecin";
import HomeInfermier from "./pages/HomeInfermier";
import GestionInfermier from "./pages/GestionInfermier";
import SuiviePatient from "./pages/SuiviePatient";
import SuivieInfermier from "./pages/SuivieInfermier";
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
        <Alerts />

        <Switch>
          <PrivateRoute exact path="/HomeMedecin" component={HomeMedecin} />
          <PrivateRoute exact path="/HomeInfermier" component={HomeInfermier} />
          <Route exact path="/GestionInfermier" component={GestionInfermier} />
          <Route exact path="/SuiviePatient" component={SuiviePatient} />
          <Route exact path="/SuivieInfermier" component={SuivieInfermier} />
          <Route exact path="/Login" component={Login} />

          <Home />
          <Route exact path="/Home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
