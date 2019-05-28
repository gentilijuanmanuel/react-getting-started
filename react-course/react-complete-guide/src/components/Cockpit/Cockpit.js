import React from 'react';
import cockpitClasses from './Cockpit.css';

const cockpit = (props) => {
  const textClasses = [];
  if (props.personsLength <= 2) {
    textClasses.push(cockpitClasses.red);
  }
  if (props.personsLength <= 1) {
    textClasses.push(cockpitClasses.bold);
  }

  let btnClass = null;
  if (props.showPersons) {
    btnClass = cockpitClasses.red;
  }

  return (
    <div className={cockpitClasses.cockpit}>
      <h1>Hi, I&apos;m a React app!</h1>
      <p className={textClasses.join(' ')}>This is a stylized text</p>
      <button
        type="button"
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;
