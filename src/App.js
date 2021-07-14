import React from 'react'
// import logo from './logo.svg';
import './App.scss';
// import './Custom.scss'

// npm start --host 0.0.0.0
// npm start 10.0.0.227:3000

import Header from './Components/Header'
import Countdown from './Components/Countdown'
// import Cards from './Components/Cards'

import DressCode from "./Views/DressCode";
import Ceremony from "./Views/Ceremony";
import Rsvp from "./Views/Rsvp";
import AirBandB from "./Views/AirBandB";
import Registry from "./Views/Registry";
import Weekend from "./Views/Weekend";


import Backstory from "./Views/Backstory";
import Info from "./Views/Info";


export default class App extends React.Component {
    
    render () {
    return (
      <div className="parent">
        <div class="background"/>
        <Header class="block"/>

          <div class="container">
            <div class="row row-cols-2 row-cols-md-3 ustify-content-center ">

                <div class="col p-2 " >
                  <Rsvp />
                </div>

                <div class="col p-2 " >
                  <AirBandB />
                </div>

                <div class="col p-2 " >
                  <Ceremony />
                </div>

                <div class="col p-2 " >
                  <DressCode />
                </div>

                <div class="col p-2 " >
                  <Registry />
                </div>

                <div class="col p-2 " >
                  <Weekend />
                </div>

          </div>
        {/* <Countdown class="block" /> */}
                <Backstory />

                <Info />

        </div>
      </div>
    );
}
}




