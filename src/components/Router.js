import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Catalog from './catalog';

import Landing from './landing';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/catalog" component={Catalog} />
    </Switch>
  );
};

export default Router;
