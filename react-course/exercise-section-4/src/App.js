import React, { useState } from 'react';
import './App.css';
import LengthValidation from './LengthValidation/LengthValidation';
import Char from './Char/Char';

const App = () => {
  const [appState, setAppState] = useState({
    text: '',
    textLength: ''
  });

  const calculateTextLengthHandler = (event) => {
    setAppState({
      text: event.target.value,
      textLength: event.target.value.length
    });
  };

  const deleteCharHandler = (charIndex) => {
    const currentChars = [...appState.text.split('')];
    currentChars.splice(charIndex, 1);
    
    setAppState({
      text: currentChars.join(''),
      textLength: currentChars.length
    });
  };

  let chars = null;

  if (appState.text != null) {
    const charArray = appState.text.split('');

    chars = charArray.map((char, index) => (
      <Char
        char={char}
        click={() => deleteCharHandler(index)}
      />
    ));
  }

  return (
    <div className="App">
      <h1>Exercise section 4</h1>
      <input type="text" value={appState.text} onChange={event => calculateTextLengthHandler(event)} />
      <p>{appState.textLength}</p>
      <LengthValidation
        textLength={appState.textLength}
      />
      {chars}
    </div>
  );
};

export default App;
