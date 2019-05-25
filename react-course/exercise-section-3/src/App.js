import React, { useState } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Clock from './Clock/Clock';
import './App.css';

const App = () => {
  const [userOutputState, setUserOutputState] = useState({
    username: 'Juanma'
  });

  const usernameChangedEventHandler = (event) => {
    setUserOutputState({
      username: event.target.value
    });
  };

  return (
    <div className="App">
      <Clock />
      <UserOutput
        username={userOutputState.username}
      />
      <UserInput
        username={userOutputState.username}
        usernameChanged={usernameChangedEventHandler}
      />
    </div>
  );
};

export default App;
