import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.css';

const input = (props) => {
  const {
    label, inputtype, elementConfig, value 
  } = props;

  let inputElement = null;

  switch (inputtype) {
    case ('input'):
      inputElement = (
        <input
          className={classes.InputElement}
          {...elementConfig}
          value={value}
        />
      );
      break;
    case ('textarea'):
      inputElement = (
        <textarea
          className={classes.InputElement} 
          {...elementConfig}
          value={value}
        />
      );
      break;
    case ('select'):
      inputElement = (
        <select
          className={classes.InputElement}
          value={value}
        >
          {elementConfig.options.map(option => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input className={classes.InputElement} />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{label}</label>
      {inputElement}
    </div>
  );
};

input.propTypes = {
  label: PropTypes.string.isRequired,
  inputtype: PropTypes.string.isRequired,
  elementConfig: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired
};

export default input;
