import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.css';

const backdrop = (props) => {
  const { show, clicked } = props;

  return (show ? <div className={classes.Backdrop} onClick={clicked} role="presentation" /> : null);
};

backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func.isRequired
};

backdrop.defaultProps = {
  show: null
};

export default backdrop;
