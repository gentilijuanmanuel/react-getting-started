import React from 'react';
import burgerLogo from '../../assets/burger-logo.png';
import classes from './Logo.css';

const logo = props => (
  <div className={classes.Logo}>
    <img alt="My burger logo" src={burgerLogo} />
  </div>
);

export default logo;
