import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import classes from './NavigationItem.css';

const navigationItem = (props) => {
  const { link, children, exact } = props;

  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={link}
        activeClassName={classes.active}
        exact={exact}
      >
        {children}
      </NavLink>
    </li>
  );
};

navigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired
};

export default navigationItem;
