import React, { useState } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

const app = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'dfeuf', name: 'Juanma', age: 23 },
      { id: 'fdfdf', name: 'Octavio', age: 22 },
      { id: '2e2e', name: 'Julián', age: 25 }
    ]
  });

  const [showPersonsState, setShowPersonsState] = useState({
    showPersons: false,
  });

  const [showCockpitState, setShowCockpitState] = useState({
    showCockpit: true
  });

  const changeNameHandler = (event, personId) => {
    const modifiedPersonIndex = personsState.persons.findIndex(person => person.id === personId);

    const persons = [
        ...personsState.persons
    ];

    const modifiedPerson = persons[modifiedPersonIndex];
    modifiedPerson.name = event.target.value;

    setPersonsState({
        persons
    });
  };

  const deletePersonHandler = (personIndex) => {
    const currentPersons = [...personsState.persons];
    currentPersons.splice(personIndex, 1);
    
    setPersonsState({
        persons: currentPersons
    });
  };

  const togglePersonsHandler = () => {
    setShowPersonsState({
      showPersons: !showPersonsState.showPersons
    });
  };

  const toggleCockpitHandler = () => {
    setShowCockpitState({
      showCockpit: !showCockpitState.showCockpit
    });
  };

  let personsToDisplay = null;

  if (showPersonsState.showPersons) {
    personsToDisplay = (
      <div>
        <Persons
          persons={personsState.persons}
          clicked={deletePersonHandler}
          changed={changeNameHandler}
        />
      </div>
    );
  }

  return (
    <div className={classes.app}>
      <button type="button" onClick={toggleCockpitHandler}>Toggle cockpit</button>
      { showCockpitState.showCockpit ? (
        <Cockpit
          personsLength={personsState.persons.length}
          clicked={togglePersonsHandler}
          showPersons={showPersonsState.showPersons}
        />
        )
        : null
      }
      {personsToDisplay}
    </div>

    // We can create react apps without using JSX (behind the scenes, JSX is pure JavaScript)
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, Im a React app!'))
  );
};

export default app;
