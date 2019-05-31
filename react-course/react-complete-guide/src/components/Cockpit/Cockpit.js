import React from 'react';
import PropTypes from 'prop-types';
import cockpitClasses from './Cockpit.css';

const cockpit = (props) => {
  const { personsLength, showPersons, clicked } = props;

  const textClasses = [];
  if (personsLength <= 2) {
    textClasses.push(cockpitClasses.red);
  }
  if (personsLength <= 1) {
    textClasses.push(cockpitClasses.bold);
  }

  let btnClass = null;
  if (showPersons) {
    btnClass = cockpitClasses.red;
  }

  return (
    <div className={cockpitClasses.cockpit}>
      <h1>Hi, I&apos;m a React app!</h1>
      <p className={textClasses.join(' ')}>This is a stylized text</p>
      <button
        type="button"
        className={btnClass}
        onClick={clicked}
      >
        Toggle persons
      </button>
    </div>
  );
};

cockpit.propTypes = {
  personsLength: PropTypes.number.isRequired,
  showPersons: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired
};

export default cockpit;
