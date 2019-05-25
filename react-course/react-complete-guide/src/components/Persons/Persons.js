import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';
import Person from '../Persons/Person/Person.js';

const persons = (props) => props.persons.map((person, index) => {
    return(
            //ErrorBoundary is a high order component
            <ErrorBoundary key={person.id}>
            <Person
                click={() => props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => props.changed(event, person.id)} />
            </ErrorBoundary>
        );
    }
);

export default persons;
