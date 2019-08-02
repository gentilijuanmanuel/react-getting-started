import React from 'react';
import PropTypes from 'prop-types';
import classes from './HamburgerButton.css';

const hamburgerButton = (props) => {
  const { hamburgerButtonClicked } = props;

  return (
    <div>
      <button type="button" className={classes.HamburgerButton} onClick={hamburgerButtonClicked}>
        Menu
      </button>
    </div>
  );
};

hamburgerButton.propTypes = {
  hamburgerButtonClicked: PropTypes.func.isRequired
};

export default hamburgerButton;
