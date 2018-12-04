import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/landing/Home';
import About from './components/landing/About';
import Contact from './components/landing/Contact';
import Catalog from './components/catalog/Catalog';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/catalog" component={Catalog} />
      </Switch>
    );
  }
}

export default Router;
