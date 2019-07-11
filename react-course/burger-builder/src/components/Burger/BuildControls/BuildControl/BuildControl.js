import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
  const { label } = props;

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button type="button" className={classes.Less}>Less</button>
      <button type="button" className={classes.More}>More</button>
    </div>
  );
};

export default buildControl;
