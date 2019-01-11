import React, { Component } from 'react';
import Router from './Router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from './common/AlertTemplate';

import { fetchCategories } from '../actions/categoryActions';
import { fetchProducers } from '../actions/producerActions';
import { fetchProductStore, fetchProductShow } from '../actions/productActions';
import { fetchCart } from '../actions/cartActions';
import { fetchUser } from '../actions/userActions';

export class App extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;

    dispatch(fetchProductStore());
    dispatch(fetchProductShow());
    dispatch(fetchCategories());
    dispatch(fetchProducers());
    dispatch(fetchCart());
    dispatch(fetchUser());
  };

  render() {
    return (
      <AlertProvider
        template={AlertTemplate}
        timeout={2000}
        position="top center"
      >
        <Router />
      </AlertProvider>
    );
  }
}

const mapStateToProps = state => {
  const { store } = state.products;

  return { store };
};

export default withRouter(connect(mapStateToProps)(App));
