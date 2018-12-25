import React, { Component } from 'react';
import Router from './Router';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoryActions';
import { fetchProducers } from '../actions/producerActions';
import { fetchProductStore, fetchProductShow } from '../actions/productActions';
import { fetchCart } from '../actions/cartActions';
import { withRouter } from 'react-router-dom';

export class App extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;

    dispatch(fetchProductStore());
    dispatch(fetchProductShow());
    dispatch(fetchCategories());
    dispatch(fetchProducers());
    dispatch(fetchCart());
  };

  render() {
    return <Router />;
  }
}

const mapStateToProps = state => {
  return { store: state.products.store };
};

export default withRouter(connect(mapStateToProps)(App));
