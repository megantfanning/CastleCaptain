import React, { Component } from 'react';
import logo from './logo.svg';
import {NavigationButton, NavigationToggle, Navigation} from './Navigation';
import {CaptainsLog} from'./CaptainsLog';
import './App.css';

//WIP need to set up an array for auto generation of commands
const commands= [["Anchor","Drift"],["Spin", "Widdershins"], ["Rise", "Sink"],["North", "South"], ["East", "West"]]

class App extends Component {
  test=["test"];
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome Castle Captain</h1>
          <Navigation />
        </header>
        <div class="sky" >
          <div id="sun"></div>
          <div class="d-inline" id="mountainNorth"></div>
          <div class="d-inline" id="mountainNorth"></div>
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
