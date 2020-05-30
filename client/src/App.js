<<<<<<< Updated upstream
import React from 'react';
import './App.css';
=======
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
// import Nevbar from "./components/NavBar";
import HomeInfermie from "./pages/HomeInfermie";
import HomeMedecin from "./pages/HomeMedecin";
import Home from "./pages/Home";
import Alerts from "./components/Alerts";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import PatientListe from "./components/PatientListe";
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        hello world
      </header>
    </div>
=======
    <BrowserRouter>
      <div className="container">
        <Alerts />

        <Switch>
          <PrivateRoute exact path="/HomeMedecin" component={HomeMedecin} />
          <PrivateRoute exact path="/HomeInfermier" component={HomeInfermie} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/affichePatient" component={PatientListe} />

          <Home />
        </Switch>
      </div>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
