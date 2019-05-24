import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';
import Person from '../Persons/Person/Person.js';

const persons = (props) => {
    const [ personsState, setPersonsState ] = useState({
        persons: props.persons        
    });

    const changeNameHandler = (event, personId) => {
        const modifiedPersonIndex = personsState.persons.findIndex(person => { return person.id === personId; });

        const persons = [
            ...personsState.persons
        ];

        const modifiedPerson = persons[modifiedPersonIndex];
        modifiedPerson.name = event.target.value;

        setPersonsState({
            persons: persons,
            showPersons: personsState.showPersons
        });
    }

    const deletePersonHandler = (personIndex) => {
        const currentPersons = [...personsState.persons];
        currentPersons.splice(personIndex, 1);
        
        setPersonsState({
            persons: currentPersons,
            showPersons: personsState.showPersons
        });
    }

    const personsToDisplay = personsState.persons.map((person, index) => {
        return(
          //ErrorBoundary is a high order component
          <ErrorBoundary key={person.id}>
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => changeNameHandler(event, person.id)} />
          </ErrorBoundary>
        );
      }
    );

    return personsToDisplay;
}

export default persons;
