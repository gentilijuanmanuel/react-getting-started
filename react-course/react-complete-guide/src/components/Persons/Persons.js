import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

const persons = props => (props.persons.map((person, index) => (
    // ErrorBoundary is a high order component
  <ErrorBoundary key={person.id}>
    <Person 
      click={() => props.clicked(index)}
      name={person.name}
      age={person.age}
      changed={event => props.changed(event, person.id)}
    />
  </ErrorBoundary>
  )));

const shouldPersonsUpdate = (oldProps, nextProps) => 
  nextProps.persons === oldProps.persons
  && nextProps.isAuthenticated === oldProps.isAuthenticated;

persons.propTypes = {
  persons: PropTypes.array.isRequired,
  clicked: PropTypes.func.isRequired,
  changed: PropTypes.func.isRequired
};

export default React.memo(persons, shouldPersonsUpdate);
