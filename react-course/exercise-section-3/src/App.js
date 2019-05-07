import React, { useState } from 'react';
import UserInput from '../src/UserInput/UserInput.js';
import UserOutput from '../src/UserOutput/UserOutput.js';
import Clock from '../src/Clock/Clock.js';
import './App.css';

const App = () => {
  const [ userOutputState, setUserOutputState ] = useState({
    username: 'gentilijuan'
  });

  const usernameChangedEventHandler = (event) => {
    setUserOutputState({
      username: event.target.value
    });
  }

  return(
    <div className="App">
      <Clock />
      <UserOutput
        username={ userOutputState.username } />
      <UserInput
        username={ userOutputState.username }
        usernameChanged={ usernameChangedEventHandler } />
    </div>
  );
}

export default App;
