import React, { Component } from 'react';
import Router from './Router';
import { connect } from 'react-redux';
import {
  fetchProductStore,
  fetchProductShow,
  fetchTags,
  fetchProducers,
  storeToShow
} from '../actions';
import { withRouter } from 'react-router-dom';

export class App extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;

    dispatch(fetchProductStore());
    dispatch(fetchProductShow());
    dispatch(fetchTags());
    dispatch(fetchProducers());
  };

  componentDidUpdate = () => {
    const { dispatch, store } = this.props;
    if (store) {
      dispatch(storeToShow(store));
    }
  };

  render() {
    return <Router />;
  }
}

const mapStateToProps = state => {
  return { store: state.products.store };
};

export default withRouter(connect(mapStateToProps)(App));
