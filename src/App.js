import React, { Component } from 'react';
import logo from './logo.svg';
import {NavigationButton, NavigationToggle} from './Navigation';
import {CaptainsLog} from'./CaptainsLog';
import './App.css';

class App extends Component {
  test=["test"];
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome Castle Captain</h1>
          <div class="d-flex m-50 align:center">
            <NavigationToggle navAnimation1="spin" label1="Spin" img={logo} navAnimation2="widdershins" label2="Widdershins"/>
            <NavigationToggle navAnimation1="icon" label1="Rise" img={logo} navAnimation2="icon" label2="Sink"/>
            <NavigationToggle navAnimation1="icon" label1="North" img={logo} navAnimation2="icon" label2="South"/>
            <NavigationToggle navAnimation1="icon" label1="East" img={logo} navAnimation2="icon" label2="West"/>
            <NavigationToggle navAnimation1="icon" label1="Anchor" img={logo} navAnimation2="icon" label2="Drift"/>
          </div>
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
