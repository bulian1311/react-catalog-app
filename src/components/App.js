import React, { Component } from 'react';
import Router from '../Router';
import { connect } from 'react-redux';
import {
  fetchProductStore,
  fetchProductShow,
  fetchTags,
  fetchProducers
} from '../actions';
import { withRouter } from 'react-router-dom';

export class App extends Component {
  componentWillMount = () => {
    this.props.dispatch(fetchProductStore());
    this.props.dispatch(fetchProductShow());
    this.props.dispatch(fetchTags());
    this.props.dispatch(fetchProducers());
  };

  render() {
    return <Router />;
  }
}

export default withRouter(connect()(App));
