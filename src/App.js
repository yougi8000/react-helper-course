import React, { Component } from 'react';

import './App.css';

import MainMenu from './components/MainMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu name='visitor' />
      </div>
    );
  }
}

export default App;
