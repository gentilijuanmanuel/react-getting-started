import React from 'react';
import PropTypes from 'prop-types';
import classes from './HamburgerButton.css';

const hamburgerButton = (props) => {
  const { hamburgerButtonClicked } = props;

  return (
    <div
      className={classes.HamburgerButton}
      onClick={hamburgerButtonClicked}
      role="presentation"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

hamburgerButton.propTypes = {
  hamburgerButtonClicked: PropTypes.func.isRequired
};

export default hamburgerButton;
