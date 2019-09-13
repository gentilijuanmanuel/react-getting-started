import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <Layout>
      {/* We can use the prop 'exact' in the generic path, without the Switch component */}
      {/* <Route path="/" exact component={BurgerBuilder} />
      <Route path="/checkout" component={Checkout} /> */}
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={BurgerBuilder} />
      </Switch>
    </Layout>
  );
}

export default App;
