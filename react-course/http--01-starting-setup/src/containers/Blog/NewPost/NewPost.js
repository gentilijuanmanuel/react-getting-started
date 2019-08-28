import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axiosInstance from '../../../axios';
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Juan Manuel Gentili',
        errorCreatingPost: false,
        submittedPost: false
    }

    createNewPostHandler = () => {
      const postToSend = {
        title: this.state.title,
        body: this.state.content,
        author: this.state.author
      };

      axiosInstance.post('/posts', postToSend)
           .then(response => {
              console.log(response);
              //Improvement: we can avoid updating the state using this.props.history.replace('/posts');
              this.setState({ submittedPost: true });
              // TODO: fix issue here
              //this.setState({ errorCreatingPost: false });
            })
           .catch(error => {
              this.setState({ errorCreatingPost: true });
           });
    }

    render () {
      const errorCreatingPostMessage = this.state.errorCreatingPost ? <p style={{textAlign: 'center'}}>An error ocurred trying to create the post :( Please try again!</p> : null;

      let redirect = null;
      if(this.state.submittedPost) {
        redirect = <Redirect to="/posts" />
      }

      return (
          <div className="NewPost">
              {redirect}
              <h1>Add a Post</h1>
              <label>Title</label>
              <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
              <label>Content</label>
              <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
              <label>Author</label>
              <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                  <option value="Juan Manuel Gentili">Juan Manuel Gentili</option>
                  <option value="Maria Victoria Gentili">Maria Victoria Gentili</option>
              </select>
              <button onClick={this.createNewPostHandler}>Add Post</button>
              {errorCreatingPostMessage}
          </div>
      );
    }
}

export default NewPost;
