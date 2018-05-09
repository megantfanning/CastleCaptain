import React, { Component } from 'react';
import logo from './logo.svg';
import {NavigationButton} from './Navigation';
import {CaptainsLog} from'./CaptainsLog';
import './App.css';

class App extends Component {
  test=["test"];
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome Castle Captain</h1>
          <div>
            <NavigationButton navAnimation="spin" label="spin" img={logo}/>
            <NavigationButton navAnimation="widdershins" label="widdershins" img={logo}/>
            <NavigationButton navAnimation="icon" label="stop" img={logo}/>
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
          <CaptainsLog log={this.test}/>
        </div>
      </div>
    );
  }
}

export default App;
