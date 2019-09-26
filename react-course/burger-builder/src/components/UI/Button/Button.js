import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.css';

const button = (props) => {
  const { clicked, btnType, children } = props;

  return (
    <button
      type="submit"
      onClick={clicked}
      className={[classes.Button, classes[btnType]].join(' ')}
    >
      {children}
    </button>
  );
};

button.propTypes = {
  clicked: PropTypes.func,
  btnType: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

button.defaultProps = {
  clicked: null
};

export default button;
