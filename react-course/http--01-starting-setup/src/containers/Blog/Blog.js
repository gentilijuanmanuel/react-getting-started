import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/new-post">New post</Link></li>
            </ul>
          </nav>
        </header>
        {/* If we need to render some independent jsx code, use the render prop: */}
        {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
        {/* If we need to render just a component, use the component prop: */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />

        {/* <Posts /> */}
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
