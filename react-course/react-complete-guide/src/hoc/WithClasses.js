import React from 'react';
import PropTypes from 'prop-types';

const withClasses = (props) => {
  const { classes, children } = props;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

withClasses.propTypes = {
  classes: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired
};

export default withClasses;
