import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Burger buider</NavigationItem>
    <NavigationItem link="/">My orders</NavigationItem>
  </ul>
);

export default navigationItems;
