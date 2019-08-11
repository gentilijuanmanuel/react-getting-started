import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
  state = {
    post: null
  }

  componentDidUpdate() {
    if(this.props.selectedPostId) {
      if(!this.state.post || (this.state.post && this.state.post.id !== this.props.selectedPostId)) {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.selectedPostId)
         .then(response => {
            this.setState({ post: response.data });
           });
      }
    }
  };

  deletePostHandler = () => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.selectedPostId)
         .then(response => {
           console.log(response);
         })
  }

  render () {
    let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
    if(this.props.selectedPostId) {
      post = <p style={{textAlign: 'center'}}>Loading...</p>;
    }
    if(this.state.post) {
      post = (
        <div className="FullPost">
            <h1>{this.state.post.title}</h1>
            <p>{this.state.post.body}</p>
            <div className="Edit">
                <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
            </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
