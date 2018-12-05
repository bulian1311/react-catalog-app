import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

export class ProductList extends Component {
  state = { visible: 12 };

  renderList = data => {
    let products = [];

    if (data) {
      products = data;
    } else {
      products = this.props.store;
    }

    return products.slice(0, this.state.visible).map(product => {
      return <ProductItem key={product._id} product={product} />;
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          {this.props.store ? this.renderList() : 'Loadind...'}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { store: state.products.store };
};

export default connect(mapStateToProps)(ProductList);
