import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <Layout>
      {/* We can use the prop 'exact' in the generic path, without the Switch component */}
      {/* <Route path="/" exact component={BurgerBuilder} />
      <Route path="/checkout" component={Checkout} /> */}
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/" component={BurgerBuilder} />
      </Switch>
    </Layout>
  );
}

export default App;
