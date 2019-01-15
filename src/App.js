import React, { Component } from 'react';
import tree from './assets/images/tree.svg';
import stag from './assets/images/stag.svg';
import './App.css';

import ContentPage from './components/content/ContentPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={tree} className="App-logo" alt="tropical" />
          <img src={stag} className="App-logo" alt="stag" />
        </header>

        <ContentPage content={"auto-static-react-app"}/>

      </div>
    );
  }
}

export default App;
