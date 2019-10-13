/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import classes from './OrderItem.css';

const orderItem = (props) => {
  const { order } = props;

  const ingredientSummary = Object.keys(order.ingredients)
    .map(ingredientKey => <li key={ingredientKey}><span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>: {order.ingredients[ingredientKey]}</li>);

  const customerInformationSummary = Object.keys(order.customer)
    .map((customerInfoKey) => {
      if (customerInfoKey === 'address') {
        return (
          <ul key={customerInfoKey}>
            {Object.keys(order.customer[customerInfoKey]).map(addressKey => (
              <li key={addressKey}>
                {order.customer.address[addressKey]}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <li key={customerInfoKey}>
          <span style={{ textTransform: 'capitalize' }}>{customerInfoKey}</span>: {order.customer[customerInfoKey]}
        </li>
      );
    });

  return (
    <div className={classes.Order}>
      <p>Ingredients:</p>
      <ul>
        { ingredientSummary }
      </ul>
      <ul>
        { customerInformationSummary }
      </ul>
      <p>
        Price: <strong>{order.totalPrice}</strong>
      </p>
    </div>
  );
};

orderItem.propTypes = {
  order: PropTypes.object.isRequired
};

export default orderItem;
