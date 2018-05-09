import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div inline>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h1 className="App-title">Welcome Castle Captain</h1>
        </header>
        <div id="controlPanel">Control panel</div>
        <div>
          <div id="ball"></div>
          <div id="mountain"></div>
        </div>
      </div>
    );
  }
}

export default App;
