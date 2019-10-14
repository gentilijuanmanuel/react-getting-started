import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.css';

const input = (props) => {
  const {
    label, inputtype, elementConfig, value, changed, invalid, touched, validationErrorMessage
  } = props;

  let inputElement = null;
  
  const inputElementClasses = [classes.InputElement];
  if (invalid && touched) {
    inputElementClasses.push(classes.InvalidInput);
  }

  let validationError = null;
  if (invalid && touched) {
      validationError = <p className={classes.ValidationError}>{validationErrorMessage}</p>;
  }

  switch (inputtype) {
    case ('input'):
      inputElement = (
        <input
          className={inputElementClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case ('textarea'):
      inputElement = (
        <textarea
          className={inputElementClasses.join(' ')} 
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case ('select'):
      inputElement = (
        <select
          className={inputElementClasses.join(' ')}
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
      {validationError}
    </div>
  );
};

input.propTypes = {
  label: PropTypes.string.isRequired,
  inputtype: PropTypes.string.isRequired,
  elementConfig: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  touched: PropTypes.bool.isRequired,
  validationErrorMessage: PropTypes.string
};

input.defaultProps = {
  validationErrorMessage: null
};

export default input;
