import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.css';

const button = (props) => {
  const {
    clicked, btnType, children, disabled 
  } = props;

  return (
    <button
      type="submit"
      onClick={clicked}
      disabled={disabled}
      className={[classes.Button, classes[btnType]].join(' ')}
    >
      {children}
    </button>
  );
};

button.propTypes = {
  clicked: PropTypes.func,
  btnType: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

button.defaultProps = {
  clicked: null,
  disabled: false
};

export default button;
