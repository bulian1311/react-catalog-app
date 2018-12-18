import React, { Component } from 'react';
import Router from './Router';
import { connect } from 'react-redux';
import {
  fetchProductStore,
  fetchProductShow,
  fetchCategories,
  fetchProducers
} from '../actions';
import { withRouter } from 'react-router-dom';

export class App extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;

    dispatch(fetchProductStore());
    dispatch(fetchProductShow());
    dispatch(fetchCategories());
    dispatch(fetchProducers());
  };

  render() {
    return <Router />;
  }
}

const mapStateToProps = state => {
  return { store: state.products.store };
};

export default withRouter(connect(mapStateToProps)(App));
