import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
  const { ingredients } = props;

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
    </Aux>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.element.isRequired
};

export default orderSummary;
