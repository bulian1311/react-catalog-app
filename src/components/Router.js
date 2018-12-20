import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Catalog from './catalog';
import Details from './details';
import Cart from './cart';
import Landing from './landing';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/catalog" component={Catalog} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
};

export default Router;
