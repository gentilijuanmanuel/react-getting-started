import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  const { showSideDrawer, closeSideDrawer } = props;

  let sideDrawerClasses = [classes.SideDrawer, classes.Close];
  if (showSideDrawer) {
    sideDrawerClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={showSideDrawer} clicked={closeSideDrawer} />
      <div className={sideDrawerClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

sideDrawer.propTypes = {
  showSideDrawer: PropTypes.bool.isRequired,
  closeSideDrawer: PropTypes.func.isRequired
};

export default sideDrawer;
