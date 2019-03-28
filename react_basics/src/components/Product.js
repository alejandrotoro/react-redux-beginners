import React, { Component } from 'react';
import './../css/App.css';

class Product extends Component {
  render() {
    const {name, value} = this.props.product
    return (
      <div>
        <p>{name}</p>
        <p>{`$${value}`}</p>
      </div>
    );
  }
}

export default Product;
