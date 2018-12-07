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
      products = this.props.show;
    }

    return products.slice(0, this.state.visible).map(product => {
      return <ProductItem key={product._id} product={product} />;
    });
  };

  renderLoading = () => {
    return (
      <img
        className="img-fluid d-block mx-auto mb-5"
        src="/img/loader.gif"
        alt=""
      />
    );
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          {this.props.show ? this.renderList() : this.renderLoading()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state.products.store,
    show: state.products.show
  };
};

export default connect(mapStateToProps)(ProductList);
