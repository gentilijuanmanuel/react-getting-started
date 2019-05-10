import React, { useState } from 'react';
import Person from '../src/Person/Person.js'
import './App.css';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Juanma", age: 23 },
      { name: "Octavio", age: 22 },
      { name: "Julián", age: 25 }
    ],
    showPersons: false
  });

  const togglePersonsHandler = () => {
    setPersonsState({
      persons: personsState.persons,
      showPersons : !personsState.showPersons
    });
  }

  const deletePersonHandler = (personIndex) => {
    personsState.persons.splice(personIndex, 1);
    setPersonsState({
      persons: personsState.persons,
      showPersons: personsState.showPersons
    });
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1x solid blue',
    padding: '8px',
    cursor: 'pointer',
    margin: '10px'
  };

  let persons = null;  

  if(personsState.showPersons) {
    persons =
      personsState.persons.map((person, index) => {
        return(
          <Person
            click={() => deletePersonHandler(index)}
            name={person.name}
            age={person.age}/>
        );
      }
    );
  }

  return (
    //JSX syntax:
    <div className="App">
      <h1>Hi, I'm a React app!</h1>
      {/* with arrow functions */}
      <button
        style={style}
        onClick={togglePersonsHandler}>
        Toggle persons
      </button>
      {persons}
    </div>

    //The same code WITHOUT using JSX:
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, Im a React app!'))
  );
}

export default app;