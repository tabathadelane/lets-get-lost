import React from 'react'
// import logo from './logo.svg';
import './App.scss';
// import './Custom.scss'

// npm start --host 0.0.0.0
// npm start 10.0.0.227:3000

import Header from './Components/Header'
import Countdown from './Components/Countdown'
// import Cards from './Components/Cards'

import Attire from "./Views/Attire";
import Backstory from "./Views/Backstory";
import Ceremony from "./Views/Ceremony";
import Food from "./Views/Food";
import Lodging from "./Views/Lodging";
import Registry from "./Views/Registry";
import Weekend from "./Views/Weekend";



export default class App extends React.Component {
    
    render () {
    return (
      <div className="parent">
        <Header class="block"/>

          <div class="container">
            <div class="row row-cols-2 row-cols-md-3 ">

                <div class="col p-2 " >
                  <Attire />
                </div>

                <div class="col p-2 " >
                  <Ceremony />
                </div>

                <div class="col p-2 " >
                  <Food />
                </div>

                <div class="col p-2 " >
                  <Lodging />
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

        </div>
      </div>
    );
}
}




