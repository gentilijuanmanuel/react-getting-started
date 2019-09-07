import React, { Component } from 'react';
import queryString from 'query-string';

class Course extends Component {
  render () {
    const titleQueryString = queryString.parse(this.props.location.search);

    return (
        <div>
          <h1>{titleQueryString.title}</h1>
          <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
        </div>
    );
  }
}

export default Course;