import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => {
  return { products: state.products };
};

export default connect(mapStateToProps)(Catalog);
