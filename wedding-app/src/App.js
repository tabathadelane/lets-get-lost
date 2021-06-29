import React from 'react'
// import logo from './logo.svg';
import './App.css';


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

        <div className="p-3">

              <Backstory />

              <Attire />

              <Ceremony />

              <Food />

              <Lodging />

              <Registry />

              <Weekend />


        </div>

    </div>
  );
}

export default App;
