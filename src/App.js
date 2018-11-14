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
      cartBooks: [],
      name: 'visitor'
    };

    this.addBook = this.addBook.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addBook(book) {
    this.state.books.map(stateBook => {
      if (stateBook.id === book.id) {
        this.setState(prevState => ({
          cartBooks: [...prevState.cartBooks, book],
        }));
      }
    });
  }

  removeBook(book) {
    let nextBooksArray = [...this.state.cartBooks];
    
    this.state.cartBooks.map((cartBook, index) => {
      if (cartBook.id === book.id) {
        nextBooksArray.splice(index, 1);
        this.setState({
          cartBooks: nextBooksArray,
        })
      }
    })
  }

  handleInputChange(event) {
    this.setState({
      name: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <MainMenu nameUser={this.state.name} />
        
        <Route path='/' exact render={() => (
          <ProductList
            listBooks={fetchedBooks}
            toAddBook={this.addBook}
            toRemoveBook={this.removeBook}
          />
        )} />
        <Route path='/cart' render={() => (
          <CartList
          cartList={this.state.cartBooks}
          />
        )} />
        <Route path='/connexion' render={() => (
          <ConnexionForm
            value={this.state.name}
            onChangeValue={this.handleInputChange}
          />
        )} />
      </div>
    );
  }
}

export default App;
