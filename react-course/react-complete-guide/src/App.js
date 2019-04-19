import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    //JSX syntax:
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working!</p>
      </div>
    );

    //The same code WITHOUT using JSX:
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, Im a React app!'))
  }
}

export default App;
