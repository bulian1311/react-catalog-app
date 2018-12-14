import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import ProductList from './ProductList';

export class Catalog extends Component {
  render() {
    return (
      <div className="catalog">
        <Navbar />
        <ProductList />
      </div>
    );
  }
}

export default Catalog;
