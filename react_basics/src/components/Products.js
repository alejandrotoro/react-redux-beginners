import React, { Component } from 'react';
import './../css/App.css';
import Product from './Product';

class Products extends Component {
  render() {
    return (
      <div>
        <h1>List of products</h1>
        { Object.keys(this.props.products).map(key => (
          <Product key={key} product={this.props.products[key]} />
        ))}
      </div>
    );
  }
}

export default Products;
