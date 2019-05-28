import React, { useState } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

const app = () => {
  const [appState, setAppState] = useState({
    persons: [
      { id: 'dfeuf', name: 'Juanma', age: 23 },
      { id: 'fdfdf', name: 'Octavio', age: 22 },
      { id: '2e2e', name: 'Julián', age: 25 }
    ],
    showPersons: false
  });

  const changeNameHandler = (event, personId) => {
    const modifiedPersonIndex = appState.persons.findIndex(person => person.id === personId);

    const persons = [
        ...appState.persons
    ];

    const modifiedPerson = persons[modifiedPersonIndex];
    modifiedPerson.name = event.target.value;

    setAppState({
        persons,
        showPersons: appState.showPersons
    });
  };

  const deletePersonHandler = (personIndex) => {
    const currentPersons = [...appState.persons];
    currentPersons.splice(personIndex, 1);
    
    setAppState({
        persons: currentPersons,
        showPersons: appState.showPersons
    });
  };

  const togglePersonsHandler = () => {
    setAppState({
      persons: appState.persons,
      showPersons: !appState.showPersons
    });
  };

  let personsToDisplay = null;

  if (appState.showPersons) {
    personsToDisplay = (
      <div>
        <Persons
          persons={appState.persons}
          clicked={deletePersonHandler}
          changed={changeNameHandler}
        />
      </div>
    );
  }

  return (
    <div className={classes.app}>
      <Cockpit
        personsLength={appState.persons.length}
        clicked={togglePersonsHandler}
        showPersons={appState.showPersons}
      />
      {personsToDisplay}
    </div>

    // We can create react apps without using JSX (behind the scenes, JSX is pure JavaScript)
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, Im a React app!'))
  );
};

export default app;
