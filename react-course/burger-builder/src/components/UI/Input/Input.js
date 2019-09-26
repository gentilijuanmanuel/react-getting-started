import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.css';

const input = (props) => {
  const {
    label, inputtype, elementConfig, value, changed
  } = props;

  let inputElement = null;

  switch (inputtype) {
    case ('input'):
      inputElement = (
        <input
          className={classes.InputElement}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case ('textarea'):
      inputElement = (
        <textarea
          className={classes.InputElement} 
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case ('select'):
      inputElement = (
        <select
          className={classes.InputElement}
          defaultValue="default"
          onChange={changed}
        >
          <option value="default" disabled>Choose a delivery method...</option>
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
  value: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired
};

export default input;
