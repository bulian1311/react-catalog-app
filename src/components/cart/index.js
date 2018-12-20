import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import ItemList from './ItemList';
import Total from './Total';

export class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ItemList />
            </div>
            <div className="col-lg-6">
              <Total />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
