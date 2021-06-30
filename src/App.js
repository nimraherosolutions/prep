import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/includes/header";
import Footer from "./components/includes/footer";
import Homepage from "./components/homepage/index";
import About from "./components/about/index";
import Services from "./components/services/index";
import Appointment from "./components/appointment/index";
import Contact from "./components/contact/index";
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Header />
        <Router>
            <Switch>
                <Route 
                  exact
                  path="/"
                  component={Homepage}
                />
                <Route
                  exact
                  path="/about"
                  component={About}
                />
                <Route
                  exact
                  path="/services"
                  component={Services}
                />
                <Route
                  exact
                  path="/appointment"
                  component={Appointment}
                />
                <Route
                  exact
                  path="/contact"
                  component={Contact}
                />
            </Switch>
        </Router>
      <Footer/>
    </Fragment>
  );
}

export default App;
