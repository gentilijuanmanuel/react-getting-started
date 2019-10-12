import React, { useState } from 'react';

import './AddPerson.css';

const addPerson = (props) => {
  const [addPersonState, setAddPersonState] = useState({
    name: '',
    age: ''
  });

  const nameChangedHandler = (event) => {
    setAddPersonState({
      name: event.target.value,
      age: addPersonState.age
    });
  }

  const ageChangedHandler = (event) => {
    setAddPersonState({
      name: addPersonState.name,
      age: event.target.value
    });
  }

  return (
    <div className="AddPerson">
      <input
        type="text"
        placeholder="Name"
        value={addPersonState.name}
        onChange={(event) => nameChangedHandler(event)}
      />
      <input
        type="text"
        placeholder="Age"
        value={addPersonState.age}
        onChange={(event) => ageChangedHandler(event)} />
      <button onClick={() => props.personAdded(addPersonState.name, addPersonState.age)}>Add Person</button>
    </div>
  );
}

export default addPerson;