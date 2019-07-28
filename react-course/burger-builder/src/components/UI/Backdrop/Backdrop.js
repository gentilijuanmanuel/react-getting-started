import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.css';

const backdrop = (props) => {
  const { show, clicked } = props;

  return (show ? <div className={classes.Backdrop} onClick={clicked} role="presentation" /> : null);
};

backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired
};

export default backdrop;
