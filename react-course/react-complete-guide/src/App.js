import React, { useState } from 'react';
import Person from '../src/Person/Person.js';
import classes from './App.css';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { id: 'dfeuf', name: "Juanma", age: 23 },
      { id: 'fdfdf', name: "Octavio", age: 22 },
      { id: '2e2e', name: "Julián", age: 25 }
    ],
    showPersons: false
  });

  const togglePersonsHandler = () => {
    setPersonsState({
      persons: personsState.persons,
      showPersons : !personsState.showPersons
    });
  }

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

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1x solid blue',
    padding: '8px',
    cursor: 'pointer',
    margin: '10px'
  };

  let persons = null;  

  if(personsState.showPersons) {
    buttonStyle.backgroundColor = 'red';

    persons =
      personsState.persons.map((person, index) => {
        return(
          <Person
            key={person.id}
            click={() => deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            changed={(event) => changeNameHandler(event, person.id)} />
        );
      }
    );
  }

  let textClasses = [];
  if(personsState.persons.length <= 2) {
    textClasses.push( classes.red );
  }
  if(personsState.persons.length <= 1) {
    textClasses.push( classes.bold );
  }

  return (
      <div className={classes.app}>
        <h1>Hi, I'm a React app!</h1>
        <p className={textClasses.join(' ')}>This is a stylized text</p>
        <button
          style={buttonStyle}
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