import React from 'react'
// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Components/Header'
import Countdown from './Components/Countdown'
import Cards from './Components/Cards'

import Attire from "./Views/Attire";
import Backstory from "./Views/Backstory";
import Ceremony from "./Views/Ceremony";
import Food from "./Views/Food";
import Lodging from "./Views/Lodging";
import Registry from "./Views/Registry";
import Weekend from "./Views/Weekend";



function App() {
  return (
    <div className="">
      <Header />
      <Countdown />
      <Router>
        <Cards />

        <div className="p-3">

          <Switch>
            <Route exact path="/">
              <Backstory />
            </Route>

            <Route exact path="/what-to-wear">
              <Attire />
            </Route>

            <Route exact path="/ceremony">
              <Ceremony />
            </Route>

            <Route exact path="/what-to-eat">
              <Food />
            </Route>

            <Route exact path="/where-were-staying">
              <Lodging />
            </Route>

            <Route exact path="/gifts">
              <Registry />
            </Route>

            <Route exact path="/what-to-do">
              <Weekend />
            </Route>

            </Switch>

        </div>
      </Router>

    </div>
  );
}

export default App;
