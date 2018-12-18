import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import Sidebar from './Sidebar';
import Search from './Search';
import Sort from './Sort';
import { loadMore, replaceShow } from '../../actions';

export class ProductList extends Component {
  componentDidUpdate = () => {
    const { dispatch, store, filter, filtered } = this.props;
    if (filter.length > 0) {
      dispatch(replaceShow(filtered));
    } else if (store.length > 0) {
      dispatch(replaceShow(store));
    }
  };

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
    const { show } = this.props;
    return (
      <div className="container mt-3">
        <div className="row">
          <Search />
          <div className="col-lg-3">
            <Sidebar />
          </div>

          <div className="col-lg-9">
            <Sort />
            <div className="row">
              {show && show.length > 0
                ? this.renderList()
                : this.renderLoading()}
              {show ? this.renderLoadMore() : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { visible, filter } = state;
  const { store, show, filtered } = state.products;

  return {
    store,
    show,
    visible,
    filter,
    filtered
  };
};

export default connect(mapStateToProps)(ProductList);
