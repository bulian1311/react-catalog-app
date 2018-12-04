import React, { Component } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Sidebar from './Sidebar';

export class Catalog extends Component {
  render() {
    return (
      <div className="catalog">
        <Sidebar />

        <Navbar />
        <ProductList />
      </div>
    );
  }
}

export default Catalog;
