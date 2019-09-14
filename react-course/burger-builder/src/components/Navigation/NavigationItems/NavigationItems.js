import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Burger builder</NavigationItem>
    <NavigationItem link="/orders">My orders</NavigationItem>
  </ul>
);

export default navigationItems;
