import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';
import Posts from './Posts/Posts';
import './Blog.css';

// The import is made when the arrow function is executed.
// The arrow function is executed when AsyncNewPost is render to the screen (when we click the NavLink).
const AsyncNewPost = asyncComponent(() => {
  return import('../Blog/NewPost/NewPost');
});

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
            {/* Absolute Paths
              By default, if you just enter to="/some-path"  or to="some-path" , that's an absolute path. 

              Absolute path means that it's always appended right after your domain. Therefore, both syntaxes (with and without leading slash) lead to example.com/some-path .

              Relative Paths
              Sometimes, you might want to create a relative path instead. This is especially useful, if your component is already loaded given a specific path (e.g. posts ) and you then want to append something to that existing path (so that you, for example, get /posts/new ).

              If you're on a component loaded via /posts , to="new"  would lead to example.com/new , NOT example.com/posts/new . 

              To change this behavior, you have to find out which path you're on and add the new fragment to that existing path. You can do that with the url  property of props.match :

              <Link to={props.match.url + '/new'}>  will lead to example.com/posts/new  when placing this link in a component loaded on /posts . If you'd use the same <Link>  in a component loaded via /all-posts , the link would point to /all-posts/new . */}
              <li>
                <NavLink
                  to="/posts"
                  // It's redundant, I let it here just for reference. We can use activeStyle also.
                  activeClassName="active"
                  exact
                >
                  Posts
                </NavLink>
              </li>
              {/* If you want to just add a relative path to the current path you're working on: */}
              {/* <li><Link to={{
                pathname: this.props.match.url + '/new-post'
              }}>New post</Link></li> */}
              <li><NavLink to="/new-post">New post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={AsyncNewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect path="/" to="/posts" />
          {/* Use the following Route without the Redirect component, because the two are catching every unknown path */}
          {/* <Route render={() => <h1>404 not found :(</h1>} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
