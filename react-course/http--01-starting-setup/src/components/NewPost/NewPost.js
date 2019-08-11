import React, { Component } from 'react';
import axios from 'axios';
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Juan Manuel Gentili'
    }

    createNewPostHandler = () => {
      const postToSend = {
        title: this.state.title,
        body: this.state.content,
        author: this.state.author
      };

      axios.post('https://jsonplaceholder.typicode.com/posts', postToSend)
           .then(function (response) {
              console.log(response);
            })
    }

    render () {
        return (
            <div className="NewPost">
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
            </div>
        );
    }
}

export default NewPost;