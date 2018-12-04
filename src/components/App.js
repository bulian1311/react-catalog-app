import React, { Component } from 'react';
import Router from '../Router';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import { withRouter } from 'react-router-dom';

export class App extends Component {
  componentWillMount = () => {
    this.props.dispatch(fetchProducts());
  };

  render() {
    return <Router />;
  }
}

export default withRouter(connect()(App));
