import React, { Component } from 'react';

import './App.css';

import MainMenu from './components/MainMenu';
import ProductList from './components/ProductList';
import CartList from './components/CartList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu name='visitor' />
        <CartList />
      </div>
    );
  }
}

export default App;
