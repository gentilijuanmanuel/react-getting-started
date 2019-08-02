import React from 'react';
import PropTypes from 'prop-types';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerButton from '../HamburgerButton/HamburgerMenu';

const toolbar = (props) => {
  const { hamburgerButtonClicked } = props;

  return (
    <header className={classes.Toolbar}>
      <HamburgerButton hamburgerButtonClicked={hamburgerButtonClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

toolbar.propTypes = {
  hamburgerButtonClicked: PropTypes.func.isRequired
};

export default toolbar;
