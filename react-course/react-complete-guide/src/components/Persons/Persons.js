import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

const persons = props => props.persons.map((person, index) => (
  // ErrorBoundary is a high order component
  <ErrorBoundary key={person.id}>
    <Person
      click={() => props.clicked(index)}
      name={person.name}
      age={person.age}
      changed={event => props.changed(event, person.id)}
    />
  </ErrorBoundary>
));

export default persons;
