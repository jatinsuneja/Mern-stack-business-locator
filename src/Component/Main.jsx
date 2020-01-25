import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import LogIn from "./Loginn";
import Admin from "./Admin/AdminPage";
import City from "./Admin/City";
import Reg from "./Admin/Register";
import Firm from "./Firm";
import BusPage from "./Bus/BusPage";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route exact path="/" render={props => <Home />} />
          <Route path="/Login" render={props => <Login />} />
          <Route exact path="/Firm/:id" component={Firm} />

          <Route path="/Admin" render={props => <Admin />} />
          <Route path="/Cities" render={props => <City />} />
          <Route path="/Register" render={props => <Reg />} />

          <Route path="/Bus" render={props => <BusPage />} />
          <Route path="/Loginn" render={props => <LogIn />} />
        </Router>
      </React.Fragment>
    );
  }
}
export default Main;
