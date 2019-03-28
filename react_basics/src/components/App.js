import React, { Component } from 'react';
import './../css/App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>Hola Mundo</p>
        <Footer />
      </div>
    );
  }
}

export default App;
