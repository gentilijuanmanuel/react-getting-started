import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import FullPost from '../Blog/FullPost/FullPost';
import './Blog.css';

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
              <li><NavLink
                    to="/"
                    // It's redundant, I let it here just for reference. We can use activeStyle also.
                    activeClassName="active"
                    exact
                  >
                    Home
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
        {/* If we need to render some independent jsx code, use the render prop: */}
        {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
        {/* If we need to render just a component, use the component prop: */}
        <Route path="/" exact component={Posts} />
        <Switch>
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/:postId" exact component={FullPost} />
        </Switch>

        {/* <section>
          <FullPost selectedPostId={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
