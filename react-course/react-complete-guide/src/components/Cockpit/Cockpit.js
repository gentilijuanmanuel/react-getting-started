import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cockpitClasses from './Cockpit.css';

const cockpit = (props) => {
  const { personsLength, showPersons, clicked } = props;

  const toggleButtonClick = useRef(null);
  
  // It's like componentDidMount() and componentDidUpdate() in one effect
  useEffect(() => {
    toggleButtonClick.current.click();

    const timer = setTimeout(() => {
      console.log('This is executed ONLY when Cockpit component initializes');
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log('This line is executed when the component is unmounted.');
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log('This is executed only when personsLength changes.');
    }, 1000);
  }, [personsLength]);

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
        ref={toggleButtonClick}
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

export default React.memo(cockpit);
