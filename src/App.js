import React, { Component } from 'react';

import './App.css';

import MainMenu from './components/MainMenu';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu name='visitor' />
        <ProductList />
      </div>
    );
  }
}

export default App;
