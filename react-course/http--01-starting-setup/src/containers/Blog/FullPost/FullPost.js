import React, { Component } from 'react';
import axiosInstance from '../../../axios';
import './FullPost.css';

class FullPost extends Component {
  state = {
    post: null,
    errorDeletingPost: false,
    errorFetchingPost: false
  }

  componentDidMount() {
    this.loadData();
  };

  //Route didn't unmount the component and mount it again with different data. It'll reuse the loaded component and update it!
  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    if ( this.props.match.params.postId ) {
      if ( !this.state.post || (this.state.post && this.state.post.id !== +this.props.match.params.postId) ) {
        axiosInstance.get('/posts/' + this.props.match.params.postId)
          .then(response => {
            this.setState({ post: response.data, errorFetchingPost: false });
          })
          .catch(error => {
            this.setState({ errorFetchingPost: true });
          });
      }
    }
  }

  deletePostHandler = () => {
    axiosInstance.delete('/posts/' + this.props.match.params.postId)
         .then(response => {
           console.log(response);
           this.setState({ errorDeletingPost: false });
         })
         .catch(error => {
           this.setState({ errorDeletingPost: true });
         });
  }

  render () {
    const errorDeletingPostMessage = this.state.errorDeletingPost ? <p>An error occurred tryng to delete the post :( Please try again!</p> : null;

    if(this.state.errorFetchingPost)
      return <p style={{textAlign: 'center'}}>An error ocurred trying to fetch the selected post :( Please try again!</p>;

    let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

    if(this.props.match.params.postId) {
      post = <p style={{textAlign: 'center'}}>Loading...</p>;
    }
    if(this.state.post) {
      post = (
        <div className="FullPost">
            <h1>{this.state.post.title}</h1>
            <p>{this.state.post.body}</p>
            <div className="Edit">
                <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                {errorDeletingPostMessage}
            </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
