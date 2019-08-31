import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Welcome from './containers/Welcome';

// import Posts from './containers/Posts';
// import User from './containers/User';
const AsyncPosts = React.lazy(() => import('./containers/Posts'));
const AsyncUsers = React.lazy(() => import('./containers/User'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/user">User Page</NavLink> |&nbsp;
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Route path="/" component={Welcome} exact />
          <Route
            path="/user"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <AsyncUsers />
              </Suspense>
            )} />
          <Route
            path="/posts" 
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <AsyncPosts />
              </Suspense>
            )} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
