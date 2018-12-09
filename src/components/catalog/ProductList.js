import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { loadMore } from '../../actions';

export class ProductList extends Component {
  renderList = data => {
    let products = [];

    if (data) {
      products = data;
    } else {
      products = this.props.show;
    }

    return products.slice(0, this.props.visible).map(product => {
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

  renderLoadMore = () => {
    if (this.props.visible > this.props.show.length) {
      return;
    }

    return (
      <button
        onClick={() => this.props.dispatch(loadMore())}
        type="button"
        className="btn btn-outline-success btn-block mb-5 ml-3 mr-3"
      >
        Загрузить еще
      </button>
    );
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          {this.props.show ? this.renderList() : this.renderLoading()}
          {this.props.show ? this.renderLoadMore() : ''}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state.products.store,
    show: state.products.show,
    visible: state.visible
  };
};

export default connect(mapStateToProps)(ProductList);
