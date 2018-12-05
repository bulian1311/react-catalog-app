import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Catalog from './components/catalog/Catalog';

import Landing from './components/landing/Landing';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/catalog" component={Catalog} />
    </Switch>
  );
};

export default Router;
