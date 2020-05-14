import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
// import Nevbar from "./components/NavBar";
import HomeInfermier from "./pages/HomeInfermier";
import HomeMedecin from "./pages/HomeMedecin";
import Home from "./pages/Home";
import Alerts from "./components/Alerts";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import PatientListe from "./components/PatientListe";

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
          <Route exact path="/Login" component={Login} />
          <Route exact path="/affichePatient" component={PatientListe} />

          <Home />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
