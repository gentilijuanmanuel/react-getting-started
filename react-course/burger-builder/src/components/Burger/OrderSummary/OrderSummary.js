/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const {
 ingredients, cancelOrder, confirmOrder, totalPrice 
} = props;

  const ingredientSummary = Object.keys(ingredients)
    .map(ingredientKey => <li key={ingredientKey}><span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>: {ingredients[ingredientKey]}</li>);

  return (
    <Aux>
      <h3>Your order</h3>
      <p>The list of awesome ingredients of your burger:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total price: <strong>{totalPrice.toFixed(2)}</strong></p>
      <p>Continue or checkout?</p>
      <Button clicked={cancelOrder} btnType="Danger">
        <p>Cancel</p>
      </Button>
      <Button clicked={confirmOrder} btnType="Success">
        <p>Confirm</p>
      </Button>
    </Aux>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.element.isRequired,
  cancelOrder: PropTypes.func.isRequired,
  confirmOrder: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired
};

export default orderSummary;
