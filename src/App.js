import React, { Component } from 'react';
import stag from './assets/images/stag.svg';
import './App.css';

import ContentPage from './components/content/ContentPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={stag} className="App-logo" alt="stag" />
          <span className="Oh-ai"> - "ohai"</span>
        </header>

        <ContentPage content={"auto-static-react-app"}/>

      </div>
    );
  }
}

export default App;
