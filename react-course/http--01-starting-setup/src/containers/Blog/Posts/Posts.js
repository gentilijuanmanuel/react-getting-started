import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import axiosInstance from '../../../axios';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
    errorFetchingPosts: false
  };

  componentDidMount() {
    axiosInstance.get('/posts')
         .then(response => {
           const posts = response.data.slice(0, 4);
           // Hardcode the author because the API doesn't have that property
           const updatedPosts = posts.map(post => {
             return {
               ...post,
               author: 'Juan Manuel Gentili'
             }
           });
            this.setState({ posts: updatedPosts, errorFetchingPosts : false });
           })
           .catch(error => {
             this.setState({ errorFetchingPosts: true });
           });
  };

  postClickedHandler = (id) => {
    this.props.history.push('/posts/', id);
  }

  render() {
    let postsToShow = <p>An error ocurred :( Please try again!</p>;
    
    if(!this.state.errorFetchingPosts) {
      postsToShow = this.state.posts.map(post => (
        <Link
          to={'/posts/' + post.id}
          key={post.id}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => this.postClickedHandler(post.id)}
          />
        </Link>
      ));
    }

    return (
      <div>
        <section className="Posts">
          {postsToShow}
        </section>
        <Route path={this.props.match.url + '/:postId'} exact component={FullPost} />
      </div>
    );
  };
}

export default Posts;
