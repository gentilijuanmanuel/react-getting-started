import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.css';

const modal = (props) => {
  const { children } = props;

  return (
    <div className={classes.Modal}>
      {children}
    </div>
  );
};

modal.propTypes = {
  children: PropTypes.element.isRequired
};

export default modal;
