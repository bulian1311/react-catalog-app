import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { loadMore } from '../../actions/visibleActions';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from '../common/AlertTemplate';

export class ProductList extends Component {
  renderList = data => {
    let products = [];

    if (data) {
      products = data;
    } else {
      products = this.props.show;
    }

    return products.slice(0, this.props.visible).map(product => {
      return (
        <AlertProvider
          key={product._id}
          template={AlertTemplate}
          timeout={2000}
          position="top center"
        >
          <ProductItem key={product._id} product={product} />
        </AlertProvider>
      );
    });
  };

  renderLoading = () => {
    return (
      <img
        className="img-fluid d-block mx-auto mb-5 mt-5"
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
    const { show } = this.props;
    return (
      <div className="row">
        {show && show.length > 0 ? this.renderList() : this.renderLoading()}
        {show ? this.renderLoadMore() : ''}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { visible } = state;
  const { store, show } = state.products;

  return {
    store,
    show,
    visible
  };
};

export default connect(mapStateToProps)(ProductList);
