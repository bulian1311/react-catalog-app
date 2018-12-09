import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => {
  return { products: state.products };
};

export default connect(mapStateToProps)(Catalog);
