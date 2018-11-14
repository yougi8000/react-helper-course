import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import fetchedBooks from './books.json';

import MainMenu from './components/MainMenu';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import ConnexionForm from './components/ConnexionForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: fetchedBooks,
    };
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="App">
        <MainMenu name='visitor' />
        
        <Route path='/' exact render={() => (
          <ProductList
          listBooks={fetchedBooks}
          />
        )} />
        <Route path='/cart' render={() => (
          <CartList />
        )} />
        <Route path='/connexion' render={() => (
          <ConnexionForm />
        )} />
      </div>
    );
  }
}

export default App;
