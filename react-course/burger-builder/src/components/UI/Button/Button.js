import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.css';

const button = (props) => {
  const { clicked, btnType, children } = props;

  return (
    <button
      type="button"
      onClick={clicked}
      className={[classes.Button, classes[btnType]].join(' ')}
    >
      {children}
    </button>
  );
};

button.propTypes = {
  clicked: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default button;
