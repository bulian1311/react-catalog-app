import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../common/Navbar';
import ItemList from './ItemList';
import Total from './Total';

export class Cart extends Component {
  render() {
    const { totalCount } = this.props;
    return (
      <div className="cart">
        <Navbar />
        <div className="container">
          {totalCount > 0 ? (
            <div className="row">
              <div className="col-lg-6">
                <ItemList />
              </div>
              <div className="col-lg-6">
                <Total />
              </div>
            </div>
          ) : (
            <h2 className="text-center text-secondary mt-5">
              Корзина пуста...
            </h2>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { totalCount: state.cart.totalCount };
};

export default connect(mapStateToProps)(Cart);
