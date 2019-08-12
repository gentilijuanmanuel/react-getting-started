import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    errorFetchingPosts: false
  };

  componentDidMount() {
    axios.get('/posts')
         .then(response => {
           const posts = response.data.slice(0, 4);
           // Hardcode the author because the API dosen't have that property
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
    this.setState({
      selectedPostId: id
    });
  }

  render () {
    let postsToShow = <p>An error ocurred :( Please try again!</p>;
    
    if(!this.state.errorFetchingPosts) {
      postsToShow = this.state.posts.map(post =>
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postClickedHandler(post.id)}
        />
      );
    }

    return (
      <div>
        <section className="Posts">
          {postsToShow}
        </section>
        <section>
          <FullPost selectedPostId={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
