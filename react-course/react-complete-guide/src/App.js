import React, { useState } from 'react';
import Person from '../src/Person/Person.js'
import './App.css';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Juanma", age: 23 },
      { name: "Octavio", age: 22 },
      { name: "Julián", age: 25 }
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({ persons: [
        { name: "Agustin", age: 23 },
        { name: "Octavio", age: 22 },
        { name: "Julián", age: 25 }
      ]
    });
  }

  return (
    //JSX syntax:
    <div className="App">
      <h1>Hi, I'm a React app!</h1>
      <button onClick={switchNameHandler}>Switch names!</button>
      {/* only props */}
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      {/* props and props.children */}
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: code, read, run, write.</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My hobbies: code, read, run, write.</Person>
    </div>

    //The same code WITHOUT using JSX:
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, Im a React app!'))
    //hola
  );
}

export default app;