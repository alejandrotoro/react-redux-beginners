import React, { Component } from 'react';
import './../css/App.css';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';

class App extends Component {
  render() {
    const products = [
      {name: 'P1', value: 5000},
      {name: 'P2', value: 2000},
      {name: 'P3', value: 1500},
      {name: 'P4', value: 1040},
      {name: 'P5', value: 12000},
      {name: 'P6', value: 1100}
    ]
    return (
      <div>
        <Header pageTitle='My Super Page' />
        <Products products={products} />
        <Footer />
      </div>
    );
  }
}

export default App;
