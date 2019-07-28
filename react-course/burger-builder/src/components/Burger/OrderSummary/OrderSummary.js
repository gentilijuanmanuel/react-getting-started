import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const { ingredients, cancelOrder, confirmOrder } = props;

  const ingredientSummary = Object.keys(ingredients)
    // eslint-disable-next-line react/jsx-one-expression-per-line
    .map(ingredientKey => <li key={ingredientKey}><span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>: {ingredients[ingredientKey]}</li>);

  return (
    <Aux>
      <h3>Your order</h3>
      <p>The list of awesome ingredients of your burger:</p>
      <ul>
        {ingredientSummary}
      </ul>
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
  confirmOrder: PropTypes.func.isRequired
};

export default orderSummary;
