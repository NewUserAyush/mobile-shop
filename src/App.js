import React, { Component } from 'react';
import LandingPage from './components/landingPage/index.js';
import logo from './logo.svg';
import './App.css';
import RoutePage from './components/RoutePage/route.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <RoutePage/>
      </div>
    );
  }
}

export default App;
