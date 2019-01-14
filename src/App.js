import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './App.css';

import ContentPage from './components/content/ContentPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <ContentPage content={"Application content..."}/>

      </div>
    );
  }
}

export default App;
