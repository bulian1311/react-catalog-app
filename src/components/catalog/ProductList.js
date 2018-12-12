import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import Sidebar from './Sidebar';
import Search from './Search';
import Filter from './Filter';
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
      <div
        onClick={() => this.props.dispatch(loadMore())}
        className="btn btn-outline-success btn-block mb-5 ml-3 mr-3"
      >
        <i className="fas fa-caret-down fa-lg mr-2" />
        <b>Загрузить еще</b>
      </div>
    );
  };

  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <Search />
          <div className="col-lg-3">
            <Sidebar />
          </div>

          <div className="col-lg-9">
            <Filter />
            <div className="row">
              {this.props.show ? this.renderList() : this.renderLoading()}
              {this.props.show ? this.renderLoadMore() : ''}
            </div>
          </div>
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
