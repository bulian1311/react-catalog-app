import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import ProductList from './ProductList';
import Sidebar from './Sidebar';
import Search from './Search';
import Sort from './Sort';

export class Catalog extends Component {
  render() {
    return (
      <div className="catalog">
        <Navbar />

        <div className="container mt-3">
          <div className="row">
            <Search />
            <div className="col-lg-3">
              <Sidebar />
            </div>

            <div className="col-lg-9">
              <Sort />
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;
