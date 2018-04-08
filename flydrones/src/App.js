import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import MainBody from "./Components/MainBody";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Drone Locations</h1>
        </header>
        <MainBody />
      </div>
    );
  }
}

export default App;
