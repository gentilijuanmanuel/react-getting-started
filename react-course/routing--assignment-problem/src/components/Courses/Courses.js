import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseClickedHandler = (id) => {
      console.log(this.props);
      this.props.history.push({pathname: '/courses/' + id});
    }

    render () {
      return (
        <div>
          <h1>Amazing Udemy Courses</h1>
          <section className="Courses">
            {
              this.state.courses.map( course => {
                return (
                  <article
                    className="Course"
                    key={course.id}
                    onClick={() => this.courseClickedHandler(course.id)}>
                    {course.title}
                  </article>
                );
              } )
            }
          </section>
          <Route path={this.props.match.url + '/:courseId'} component={Course} />
        </div>
      );
    }
}

export default withRouter(Courses);