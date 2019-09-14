/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';

import classes from './Order.css';

const order = props => (
  <div className={classes.Order}>
    <p>Ingredients: </p>
    <p>
      Price: <strong>USD 5.5</strong>
    </p>
  </div>
);

export default order;
