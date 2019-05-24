import React, { useState } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons.js';

const app = () => {
  const [ appState, setAppState ] = useState({
    // persons: [
    //   { id: 'dfeuf', name: "Juanma", age: 23 },
    //   { id: 'fdfdf', name: "Octavio", age: 22 },
    //   { id: '2e2e', name: "Julián", age: 25 }
    // ],
    showPersons: false
  });

  const persons = [
    { id: 'dfeuf', name: "Juanma", age: 23 },
    { id: 'fdfdf', name: "Octavio", age: 22 },
    { id: '2e2e', name: "Julián", age: 25 }
  ];

  const togglePersonsHandler = () => {
    setAppState({
      showPersons : !appState.showPersons
    });
  }

  let personsToDisplay = null;
  let btnClass = null;

  if(appState.showPersons) {
    personsToDisplay = <Persons persons={persons} />;
    btnClass = classes.red;
  }

  // let textClasses = [];
  // if(appState.persons.length <= 2) {
  //   textClasses.push( classes.red );
  // }
  // if(appState.persons.length <= 1) {
  //   textClasses.push( classes.bold );
  // }

  return (
        <div className={classes.app}>
          <h1>Hi, I'm a React app!</h1>
          {/* <p className={textClasses.join(' ')}>This is a stylized text</p> */}

          <button
            className={btnClass}
            onClick={togglePersonsHandler}>
            Toggle persons
          </button>
          {personsToDisplay}
        </div>

    //We can create react apps without using JSX (behind the scenes, JSX is pure JavaScript)
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, Im a React app!'))
  );
}

export default app;