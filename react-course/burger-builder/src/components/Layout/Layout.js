import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
  const { children } = props;

  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>
        { children }
      </main>
    </Aux>
  );
};

layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default layout;
