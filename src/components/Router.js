import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Catalog from './catalog';
import Details from './details';

import Landing from './landing';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/catalog" component={Catalog} />
      <Route exact path="/details" component={Details} />
    </Switch>
  );
};

export default Router;
