import React, { useState } from 'react';
import Person from '../components/Persons/Person/Person.js';
import classes from './App.css';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary.js';
import Persons from '../components/Persons/Persons.js';

const app = props => {
  const [ appState, setAppState ] = useState({
    persons: [
      { id: 'dfeuf', name: "Juanma", age: 23 },
      { id: 'fdfdf', name: "Octavio", age: 22 },
      { id: '2e2e', name: "Julián", age: 25 }
    ],
    showPersons: false
  });

  const togglePersonsHandler = () => {
    setAppState({
      persons: appState.persons,
      showPersons : !appState.showPersons
    });
  }

  const changeNameHandler = (event, personId) => {
    const modifiedPersonIndex = appState.persons.findIndex(person => { return person.id === personId; });

    const persons = [
      ...appState.persons
    ];

    const modifiedPerson = persons[modifiedPersonIndex];
    modifiedPerson.name = event.target.value;

    setAppState({
      persons: persons,
      showPersons: appState.showPersons
    });
  }

  const deletePersonHandler = (personIndex) => {
    const currentPersons = [...appState.persons];
    currentPersons.splice(personIndex, 1);
    
    setAppState({
      persons: currentPersons,
      showPersons: appState.showPersons
    });
  }

  let persons = null;
  let btnClass = null;

  if(appState.showPersons) {
    persons =
      appState.persons.map((person, index) => {
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

    btnClass = classes.red;
  }

  let textClasses = [];
  if(appState.persons.length <= 2) {
    textClasses.push( classes.red );
  }
  if(appState.persons.length <= 1) {
    textClasses.push( classes.bold );
  }

  return (
        <div className={classes.app}>
          <Persons />
          <h1>Hi, I'm a React app!</h1>
          <p className={textClasses.join(' ')}>This is a stylized text</p>
          <button
            className={btnClass}
            onClick={togglePersonsHandler}>
            Toggle persons
          </button>
          {persons}
        </div>

    //We can create react apps without using JSX (behind the scenes, JSX is pure JavaScript)
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, Im a React app!'))
  );
}

export default app;