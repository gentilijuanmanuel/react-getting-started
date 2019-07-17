import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControl.css';

const buildControl = (props) => {
  const {
    label, removeIngredient, addIngredient
  } = props;

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button type="button" className={classes.Less} onClick={removeIngredient}>Less</button>
      <button type="button" className={classes.More} onClick={addIngredient}>More</button>
    </div>
  );
};

buildControl.propTypes = {
  label: PropTypes.string.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  addIngredient: PropTypes.func.isRequired
};

export default buildControl;
