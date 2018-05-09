import React, { Component } from 'react';
import logo from './logo.svg';
import {NavigationButton} from './Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome Castle Captain</h1>
          <div>
            <NavigationButton navClass="spin" label="spin" img={logo}/>
            <NavigationButton navClass="widdershins" label="widdershins" img={logo}/>
            <NavigationButton navClass="icon" label="stop" img={logo}/>
          </div>
        </header>
        <div class="sky" >
          <div id="sun"></div>
          <div class="d-inline" id="mountainNorth"></div>
          <div class="d-inline" id="mountainNorth"></div>
          <div class="d-inline" id="mountainSouth"></div>
        </div>
        <div class="scenery" ></div>
        <div class="captainsLog">
          <h1> Captains Log</h1>
          {}
        </div>
      </div>
    );
  }
}

export default App;
